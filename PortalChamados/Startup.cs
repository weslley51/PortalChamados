using System.IO;
using AutoMapper;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using PortalChamados.Core.Configurations;

namespace PortalChamados
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration Configuration)
        {
            this.Configuration = Configuration;
        }

        public void ConfigureServices(IServiceCollection Services)
        {
            Services.AddAuthentication(IISDefaults.AuthenticationScheme);
			Services.AddAutoMapper(typeof(Startup));

			//Services.Configure<Email>(Configuration.GetSection("EmailSettings"));
			IoC.RegisterAppServices(Services);

            var AppSettingsSection = Configuration.GetSection("AppSettings");
            Services.Configure<AppSettings>(AppSettingsSection);

            var AppSettings = AppSettingsSection.Get<AppSettings>();
            var Key = Encoding.ASCII.GetBytes(AppSettings.Secret);

            Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            Services.AddAuthorization(options =>
            {
                options.AddPolicy("Authorized", policy => policy.RequireClaim("UserAuthorized"));
                options.AddPolicy("Unauthorized", policy => policy.RequireClaim("UserUnauthorized"));
            });

            Services.AddTransient(s => s.GetService<IHttpContextAccessor>().HttpContext.User);

            // configure DI for application services
            //Services.AddScoped<IUsuarioService, UsuarioService>();

            Services.AddMvc(config =>
            {
                /* Adiciona Authorization em todas as controller da API */
                var Policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();

                config.Filters.Add(new AuthorizeFilter(Policy));
            })
			.AddJsonOptions(options => {
				options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
				options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
			});
        }
                
        public void Configure(IApplicationBuilder App, IHostingEnvironment Environment)
        {
            if (Environment.IsDevelopment())
            {
                App.UseDeveloperExceptionPage();
            }
            
            //loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddDebug();

            App.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/";
                    context.Response.StatusCode = 200;
                    await next();
                }
            });

            App.UseDefaultFiles();
            App.UseStaticFiles();
            App.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            App.UseAuthentication();
            App.UseMvc();
        }
    }
}
