﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(PortalContext))]
    [Migration("20190514121229_RemoverDescricao")]
    partial class RemoverDescricao
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Domain.Models.Agencia", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BancoId");

                    b.Property<string>("Digito1")
                        .HasMaxLength(1);

                    b.Property<string>("Digito2")
                        .HasMaxLength(1);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasMaxLength(5);

                    b.HasKey("Id");

                    b.HasIndex("BancoId");

                    b.ToTable("Agencias");
                });

            modelBuilder.Entity("Domain.Models.Anexo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Caminho")
                        .IsRequired()
                        .HasMaxLength(250);

                    b.Property<int?>("ChamadoId");

                    b.HasKey("Id");

                    b.HasIndex("ChamadoId");

                    b.ToTable("Anexos");
                });

            modelBuilder.Entity("Domain.Models.Atividade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FornecedorId");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("FornecedorId");

                    b.ToTable("Atividades");
                });

            modelBuilder.Entity("Domain.Models.Banco", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasMaxLength(5);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Bancos");
                });

            modelBuilder.Entity("Domain.Models.Chamado", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ChamadoPrincipalId");

                    b.Property<DateTime?>("DataFechamento")
                        .HasColumnType("DATETIME2(0)");

                    b.Property<DateTime?>("DataFimPrazo")
                        .IsRequired()
                        .HasColumnType("DATETIME2(0)");

                    b.Property<DateTime?>("DataSolicitacao")
                        .IsRequired()
                        .HasColumnType("DATETIME2(0)");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<short?>("NotaAtendimento");

                    b.Property<short>("Prioridade");

                    b.Property<int>("ServicoId");

                    b.Property<int>("SolicitanteId");

                    b.Property<int?>("SolucionadorId");

                    b.Property<int>("StatusId");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(11);

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("ChamadoPrincipalId");

                    b.HasIndex("ServicoId");

                    b.HasIndex("SolicitanteId");

                    b.HasIndex("SolucionadorId");

                    b.HasIndex("StatusId");

                    b.ToTable("Chamados");
                });

            modelBuilder.Entity("Domain.Models.Conta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AgenciaId");

                    b.Property<string>("Digito1")
                        .HasMaxLength(1);

                    b.Property<string>("Digito2")
                        .HasMaxLength(1);

                    b.Property<int>("FornecedorId");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasMaxLength(15);

                    b.HasKey("Id");

                    b.HasIndex("AgenciaId");

                    b.HasIndex("FornecedorId");

                    b.ToTable("Contas");
                });

            modelBuilder.Entity("Domain.Models.Contato", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool?>("Email")
                        .IsRequired();

                    b.Property<int>("FornecedorId");

                    b.Property<string>("Observacoes")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Responsavel")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Valor")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("FornecedorId");

                    b.ToTable("Contatos");
                });

            modelBuilder.Entity("Domain.Models.Departamento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Sigla")
                        .IsRequired()
                        .HasMaxLength(5);

                    b.HasKey("Id");

                    b.ToTable("Departamentos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Nome = "Tecnologia da Informação",
                            Sigla = "TI"
                        });
                });

            modelBuilder.Entity("Domain.Models.Endereco", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Cep")
                        .IsRequired()
                        .HasMaxLength(8);

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Complemento")
                        .HasMaxLength(50);

                    b.Property<int>("EstadoId");

                    b.Property<string>("Logradouro")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<short?>("Numero");

                    b.HasKey("Id");

                    b.HasIndex("EstadoId");

                    b.ToTable("Enderecos");
                });

            modelBuilder.Entity("Domain.Models.Estado", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Sigla")
                        .IsRequired()
                        .HasMaxLength(2);

                    b.HasKey("Id");

                    b.ToTable("Estados");
                });

            modelBuilder.Entity("Domain.Models.Fornecedor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DocumentoPrimario")
                        .IsRequired()
                        .HasMaxLength(14);

                    b.Property<string>("DocumentoSecundario")
                        .HasMaxLength(15);

                    b.Property<int?>("EnderecoId");

                    b.Property<string>("NomeCompletoRazaoSocial")
                        .IsRequired()
                        .HasMaxLength(250);

                    b.Property<string>("NomeFantasia")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<bool?>("PessoaJuridica")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("EnderecoId");

                    b.ToTable("Fornecedores");
                });

            modelBuilder.Entity("Domain.Models.Funcionalidade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Funcionalidades");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Nome = "Cadastros Administração"
                        });
                });

            modelBuilder.Entity("Domain.Models.GrupoServico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DepartamentoId");

                    b.Property<string>("Descricao")
                        .HasMaxLength(250);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("DepartamentoId");

                    b.ToTable("GruposServicos");
                });

            modelBuilder.Entity("Domain.Models.Permissao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descricao")
                        .HasMaxLength(250);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Permissoes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Descricao = "Perfil Administrativo com acesso total a todas as partes do sistema",
                            Nome = "Administração"
                        });
                });

            modelBuilder.Entity("Domain.Models.PermissaoFuncionalidade", b =>
                {
                    b.Property<int>("PermissaoId");

                    b.Property<int>("FuncionalidadeId");

                    b.Property<bool?>("Alterar")
                        .IsRequired();

                    b.Property<bool?>("Consultar")
                        .IsRequired();

                    b.Property<bool?>("Deletar")
                        .IsRequired();

                    b.Property<bool?>("Salvar")
                        .IsRequired();

                    b.HasKey("PermissaoId", "FuncionalidadeId");

                    b.HasIndex("FuncionalidadeId");

                    b.ToTable("PermissoesFuncionalidades");

                    b.HasData(
                        new
                        {
                            PermissaoId = 1,
                            FuncionalidadeId = 1,
                            Alterar = true,
                            Consultar = true,
                            Deletar = true,
                            Salvar = true
                        });
                });

            modelBuilder.Entity("Domain.Models.PermissaoUsuario", b =>
                {
                    b.Property<int>("UsuarioId");

                    b.Property<int>("PermissaoId");

                    b.HasKey("UsuarioId", "PermissaoId");

                    b.HasIndex("PermissaoId");

                    b.ToTable("PermissoesUsuarios");

                    b.HasData(
                        new
                        {
                            UsuarioId = 1,
                            PermissaoId = 1
                        });
                });

            modelBuilder.Entity("Domain.Models.Servico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descricao")
                        .HasMaxLength(250);

                    b.Property<int>("GrupoServicoId");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<short>("Prazo");

                    b.Property<int>("TipoServicoId");

                    b.HasKey("Id");

                    b.HasIndex("GrupoServicoId");

                    b.HasIndex("TipoServicoId");

                    b.ToTable("Servicos");
                });

            modelBuilder.Entity("Domain.Models.Status", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Status");
                });

            modelBuilder.Entity("Domain.Models.TipoServico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("TiposServico");
                });

            modelBuilder.Entity("Domain.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool?>("AlterarSenha")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<int>("DepartamentoId");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.Property<string>("NomeCompleto")
                        .IsRequired()
                        .HasMaxLength(150);

                    b.Property<string>("Salt")
                        .HasMaxLength(50);

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("DepartamentoId");

                    b.ToTable("Usuarios");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AlterarSenha = false,
                            DepartamentoId = 1,
                            Login = "sistema",
                            NomeCompleto = "Usuário de Sistema",
                            Salt = "79WTLkIbL7kcf0IrxCJGxva4PBIxK2oSp06HiMjlZzA=",
                            Senha = "I53LDJcVAV+yJZL56f5G8xYvSJdrmu59SExGgP1HIvg="
                        });
                });

            modelBuilder.Entity("Domain.Models.Agencia", b =>
                {
                    b.HasOne("Domain.Models.Banco", "Banco")
                        .WithMany()
                        .HasForeignKey("BancoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Anexo", b =>
                {
                    b.HasOne("Domain.Models.Chamado")
                        .WithMany("Anexos")
                        .HasForeignKey("ChamadoId");
                });

            modelBuilder.Entity("Domain.Models.Atividade", b =>
                {
                    b.HasOne("Domain.Models.Fornecedor")
                        .WithMany("Atividades")
                        .HasForeignKey("FornecedorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Chamado", b =>
                {
                    b.HasOne("Domain.Models.Chamado", "ChamadoPrincipal")
                        .WithMany()
                        .HasForeignKey("ChamadoPrincipalId");

                    b.HasOne("Domain.Models.Servico", "Servico")
                        .WithMany()
                        .HasForeignKey("ServicoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Models.Usuario", "Solicitante")
                        .WithMany()
                        .HasForeignKey("SolicitanteId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("Domain.Models.Usuario", "Solucionador")
                        .WithMany()
                        .HasForeignKey("SolucionadorId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("Domain.Models.Status", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Conta", b =>
                {
                    b.HasOne("Domain.Models.Agencia", "Agencia")
                        .WithMany()
                        .HasForeignKey("AgenciaId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Models.Fornecedor")
                        .WithMany("Contas")
                        .HasForeignKey("FornecedorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Contato", b =>
                {
                    b.HasOne("Domain.Models.Fornecedor")
                        .WithMany("Contatos")
                        .HasForeignKey("FornecedorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Endereco", b =>
                {
                    b.HasOne("Domain.Models.Estado", "Estado")
                        .WithMany()
                        .HasForeignKey("EstadoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Fornecedor", b =>
                {
                    b.HasOne("Domain.Models.Endereco", "Endereco")
                        .WithMany()
                        .HasForeignKey("EnderecoId");
                });

            modelBuilder.Entity("Domain.Models.GrupoServico", b =>
                {
                    b.HasOne("Domain.Models.Departamento", "Departamento")
                        .WithMany()
                        .HasForeignKey("DepartamentoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.PermissaoFuncionalidade", b =>
                {
                    b.HasOne("Domain.Models.Funcionalidade", "Funcionalidade")
                        .WithMany()
                        .HasForeignKey("FuncionalidadeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Models.Permissao", "Permissao")
                        .WithMany("PermissaoFuncionalidades")
                        .HasForeignKey("PermissaoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.PermissaoUsuario", b =>
                {
                    b.HasOne("Domain.Models.Permissao", "Permissao")
                        .WithMany()
                        .HasForeignKey("PermissaoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Models.Usuario", "Usuario")
                        .WithMany("PermissoesUsuario")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Servico", b =>
                {
                    b.HasOne("Domain.Models.GrupoServico", "GrupoServico")
                        .WithMany()
                        .HasForeignKey("GrupoServicoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Domain.Models.TipoServico", "TipoServico")
                        .WithMany()
                        .HasForeignKey("TipoServicoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Domain.Models.Usuario", b =>
                {
                    b.HasOne("Domain.Models.Departamento", "Departamento")
                        .WithMany()
                        .HasForeignKey("DepartamentoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
