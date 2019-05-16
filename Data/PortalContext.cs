using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Linq;
using Data.Maps;
using Domain.Models;

namespace Data
{
	public class PortalContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder OptionsBuilder)
		{
			IConfigurationRoot Configuration = new ConfigurationBuilder()
															.SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
															.AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json")
															.Build();

			OptionsBuilder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
		}

		protected override void OnModelCreating(ModelBuilder ModelBuilder)
		{
			ModelBuilder.AddConfiguration(new AgenciaMap());
			ModelBuilder.AddConfiguration(new AnexoMap());
			ModelBuilder.AddConfiguration(new AtividadeMap());
			ModelBuilder.AddConfiguration(new BancoMap());
			ModelBuilder.AddConfiguration(new ChamadoMap());
			ModelBuilder.AddConfiguration(new ContaMap());
			ModelBuilder.AddConfiguration(new ContatoMap());
			ModelBuilder.AddConfiguration(new DepartamentoMap());
			ModelBuilder.AddConfiguration(new EnderecoMap());
			ModelBuilder.AddConfiguration(new EstadoMap());
			ModelBuilder.AddConfiguration(new FornecedorMap());
			ModelBuilder.AddConfiguration(new FuncionalidadeMap());
			ModelBuilder.AddConfiguration(new GrupoServicoMap());
			ModelBuilder.AddConfiguration(new PermissaoMap());
			ModelBuilder.AddConfiguration(new PermissaoFuncionalidadeMap());
			ModelBuilder.AddConfiguration(new PermissaoUsuarioMap());
			ModelBuilder.AddConfiguration(new ServicoMap());
			ModelBuilder.AddConfiguration(new StatusMap());
			ModelBuilder.AddConfiguration(new TipoServicoMap());
			ModelBuilder.AddConfiguration(new UsuarioMap());

			ModelBuilder
				.Model
				.GetEntityTypes()
				.SelectMany(x => x.GetProperties())
				.Where
				(
					p => p.ClrType == typeof(string) ||
						 p.ClrType == typeof(DateTime) || p.ClrType == typeof(DateTime?) ||
						 p.ClrType == typeof(decimal) || p.ClrType == typeof(decimal?)
				)
				.ToList()
				.ForEach(x =>
				{
					var Type = string.Empty;

					if (x.ClrType == typeof(string))
					{
						if (!x.GetMaxLength().HasValue)
							ModelBuilder.Entity(x.DeclaringType.ClrType).Property(x.Name).HasMaxLength(50);
					}
					else
					{
						if (x.ClrType == typeof(DateTime) || x.ClrType == typeof(DateTime?))
							Type = "DATETIME2(0)";
						else
							Type = "DECIMAL(18,3)";

						ModelBuilder.Entity(x.DeclaringType.ClrType).Property(x.Name).HasColumnType(Type);
					}
				});

			Seed(ModelBuilder);
		}

		private void Seed(ModelBuilder ModelBuilder)
		{			
			ModelBuilder.Entity<Permissao>().HasData(new
			{
				Id = 1,
				Nome = "Administração",
				Descricao = "Perfil Administrativo com acesso total a todas as partes do sistema"
			});

			ModelBuilder.Entity<Departamento>().HasData(new
			{
				Id = 1,
				Nome = "Tecnologia da Informação",
				Sigla = "TI"
			});

			ModelBuilder.Entity<Funcionalidade>().HasData(new
			{
				Id = 1,
				Nome = "Cadastros Administração",
				Descricao = "Gerenciamento dos cadastros administrativos do sistema"
			});

			ModelBuilder.Entity<Usuario>().HasData(new
			{
				Id = 1,
				Login = "sistema",
				AlterarSenha = false,
				Senha = "I53LDJcVAV+yJZL56f5G8xYvSJdrmu59SExGgP1HIvg=",
				Salt = "79WTLkIbL7kcf0IrxCJGxva4PBIxK2oSp06HiMjlZzA=",
				NomeCompleto = "Usuário de Sistema",
				DepartamentoId = 1
			});

			ModelBuilder.Entity<PermissaoUsuario>().HasData(new
			{
				UsuarioId = 1,
				PermissaoId = 1
			});

			ModelBuilder.Entity<PermissaoFuncionalidade>().HasData(new
			{
				Salvar = true,
				Alterar = true,
				Deletar = true,
				Consultar = true,
				PermissaoId = 1,
				FuncionalidadeId = 1
			});
		}
	}
}
