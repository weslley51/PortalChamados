using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace PortalChamados
{
    public class Program
    {
        public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
                                                                   .SetBasePath(Directory.GetCurrentDirectory())
                                                                   .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                                                                   .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: false, reloadOnChange: true)
                                                                   .Build();

        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
            /*
             Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(Configuration).CreateLogger();
            try
            {
                Log.Information("Host starting...");
                BuildWebHost(args).Run();
            }
            catch (Exception ex)
            {
                Log.Error("Host terminated unexpectedly: {message}", ex.Message, ex);
            }
            finally
            {
                Log.CloseAndFlush();
            }
             */
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args)
                            .UseKestrel()
                            .UseStartup<Startup>()
                            .UseConfiguration(Configuration)
                            //.UseSerilog()
                            .Build();
        }
    }
}
