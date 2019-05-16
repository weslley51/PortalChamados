using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bancos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Codigo = table.Column<string>(maxLength: 5, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bancos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departamentos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 100, nullable: false),
                    Sigla = table.Column<string>(maxLength: 5, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departamentos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Estados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Sigla = table.Column<string>(maxLength: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Funcionalidades",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 100, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionalidades", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Permissoes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Permissoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Status",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Status", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TiposServico",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposServico", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Agencias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Numero = table.Column<string>(maxLength: 5, nullable: false),
                    Digito1 = table.Column<string>(maxLength: 1, nullable: true),
                    Digito2 = table.Column<string>(maxLength: 1, nullable: true),
                    BancoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agencias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Agencias_Bancos_BancoId",
                        column: x => x.BancoId,
                        principalTable: "Bancos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GruposServicos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 100, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: true),
                    DepartamentoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GruposServicos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GruposServicos_Departamentos_DepartamentoId",
                        column: x => x.DepartamentoId,
                        principalTable: "Departamentos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AlterarSenha = table.Column<bool>(nullable: false, defaultValue: true),
                    Login = table.Column<string>(maxLength: 20, nullable: false),
                    Senha = table.Column<string>(maxLength: 50, nullable: false),
                    Salt = table.Column<string>(maxLength: 50, nullable: true),
                    NomeCompleto = table.Column<string>(maxLength: 150, nullable: false),
                    DepartamentoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Usuarios_Departamentos_DepartamentoId",
                        column: x => x.DepartamentoId,
                        principalTable: "Departamentos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Enderecos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Logradouro = table.Column<string>(maxLength: 100, nullable: false),
                    Numero = table.Column<short>(nullable: true),
                    Bairro = table.Column<string>(maxLength: 100, nullable: false),
                    Cidade = table.Column<string>(maxLength: 100, nullable: false),
                    Complemento = table.Column<string>(maxLength: 50, nullable: true),
                    Cep = table.Column<string>(maxLength: 8, nullable: false),
                    EstadoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enderecos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Enderecos_Estados_EstadoId",
                        column: x => x.EstadoId,
                        principalTable: "Estados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PermissoesFuncionalidades",
                columns: table => new
                {
                    PermissaoId = table.Column<int>(nullable: false),
                    FuncionalidadeId = table.Column<int>(nullable: false),
                    Salvar = table.Column<bool>(nullable: false),
                    Alterar = table.Column<bool>(nullable: false),
                    Deletar = table.Column<bool>(nullable: false),
                    Consultar = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissoesFuncionalidades", x => new { x.PermissaoId, x.FuncionalidadeId });
                    table.ForeignKey(
                        name: "FK_PermissoesFuncionalidades_Funcionalidades_FuncionalidadeId",
                        column: x => x.FuncionalidadeId,
                        principalTable: "Funcionalidades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PermissoesFuncionalidades_Permissoes_PermissaoId",
                        column: x => x.PermissaoId,
                        principalTable: "Permissoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Servicos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: true),
                    Prazo = table.Column<short>(nullable: false),
                    TipoServicoId = table.Column<int>(nullable: false),
                    GrupoServicoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servicos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Servicos_GruposServicos_GrupoServicoId",
                        column: x => x.GrupoServicoId,
                        principalTable: "GruposServicos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Servicos_TiposServico_TipoServicoId",
                        column: x => x.TipoServicoId,
                        principalTable: "TiposServico",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PermissoesUsuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(nullable: false),
                    PermissaoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissoesUsuarios", x => new { x.UsuarioId, x.PermissaoId });
                    table.ForeignKey(
                        name: "FK_PermissoesUsuarios_Permissoes_PermissaoId",
                        column: x => x.PermissaoId,
                        principalTable: "Permissoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PermissoesUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Fornecedores",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PessoaJuridica = table.Column<bool>(nullable: false),
                    NomeCompletoRazaoSocial = table.Column<string>(maxLength: 250, nullable: false),
                    NomeFantasia = table.Column<string>(maxLength: 100, nullable: false),
                    DocumentoPrimario = table.Column<string>(maxLength: 14, nullable: false),
                    DocumentoSecundario = table.Column<string>(maxLength: 15, nullable: true),
                    EnderecoId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornecedores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fornecedores_Enderecos_EnderecoId",
                        column: x => x.EnderecoId,
                        principalTable: "Enderecos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Chamados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Descricao = table.Column<string>(maxLength: 500, nullable: false),
                    Titulo = table.Column<string>(maxLength: 50, nullable: false),
                    Telefone = table.Column<string>(maxLength: 11, nullable: false),
                    DataSolicitacao = table.Column<DateTime>(type: "DATETIME2(0)", nullable: false),
                    DataFimPrazo = table.Column<DateTime>(type: "DATETIME2(0)", nullable: false),
                    DataFechamento = table.Column<DateTime>(type: "DATETIME2(0)", nullable: true),
                    Prioridade = table.Column<short>(nullable: false),
                    NotaAtendimento = table.Column<short>(nullable: true),
                    ServicoId = table.Column<int>(nullable: false),
                    StatusId = table.Column<int>(nullable: false),
                    SolicitanteId = table.Column<int>(nullable: false),
                    SolucionadorId = table.Column<int>(nullable: true),
                    ChamadoPrincipalId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chamados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Chamados_Chamados_ChamadoPrincipalId",
                        column: x => x.ChamadoPrincipalId,
                        principalTable: "Chamados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Chamados_Servicos_ServicoId",
                        column: x => x.ServicoId,
                        principalTable: "Servicos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Chamados_Usuarios_SolicitanteId",
                        column: x => x.SolicitanteId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Chamados_Usuarios_SolucionadorId",
                        column: x => x.SolucionadorId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Chamados_Status_StatusId",
                        column: x => x.StatusId,
                        principalTable: "Status",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Atividades",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    FornecedorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Atividades", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Atividades_Fornecedores_FornecedorId",
                        column: x => x.FornecedorId,
                        principalTable: "Fornecedores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Contas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(maxLength: 50, nullable: false),
                    Numero = table.Column<string>(maxLength: 15, nullable: false),
                    Digito1 = table.Column<string>(maxLength: 1, nullable: true),
                    Digito2 = table.Column<string>(maxLength: 1, nullable: true),
                    AgenciaId = table.Column<int>(nullable: false),
                    FornecedorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contas_Agencias_AgenciaId",
                        column: x => x.AgenciaId,
                        principalTable: "Agencias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Contas_Fornecedores_FornecedorId",
                        column: x => x.FornecedorId,
                        principalTable: "Fornecedores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Contatos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<bool>(nullable: false),
                    Valor = table.Column<string>(maxLength: 50, nullable: false),
                    Responsavel = table.Column<string>(maxLength: 50, nullable: false),
                    Observacoes = table.Column<string>(maxLength: 100, nullable: false),
                    FornecedorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contatos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contatos_Fornecedores_FornecedorId",
                        column: x => x.FornecedorId,
                        principalTable: "Fornecedores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Anexos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Caminho = table.Column<string>(maxLength: 250, nullable: false),
                    ChamadoId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Anexos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Anexos_Chamados_ChamadoId",
                        column: x => x.ChamadoId,
                        principalTable: "Chamados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Departamentos",
                columns: new[] { "Id", "Nome", "Sigla" },
                values: new object[] { 1, "Tecnologia da Informação", "TI" });

            migrationBuilder.InsertData(
                table: "Funcionalidades",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[] { 1, "Gerenciamento dos cadastros administrativos do sistema", "Cadastros Administração" });

            migrationBuilder.InsertData(
                table: "Permissoes",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[] { 1, "Perfil Administrativo com acesso total a todas as partes do sistema", "Administração" });

            migrationBuilder.InsertData(
                table: "PermissoesFuncionalidades",
                columns: new[] { "PermissaoId", "FuncionalidadeId", "Alterar", "Consultar", "Deletar", "Salvar" },
                values: new object[] { 1, 1, true, true, true, true });

            migrationBuilder.InsertData(
                table: "Usuarios",
                columns: new[] { "Id", "AlterarSenha", "DepartamentoId", "Login", "NomeCompleto", "Salt", "Senha" },
                values: new object[] { 1, false, 1, "sistema", "Usuário de Sistema", "79WTLkIbL7kcf0IrxCJGxva4PBIxK2oSp06HiMjlZzA=", "I53LDJcVAV+yJZL56f5G8xYvSJdrmu59SExGgP1HIvg=" });

            migrationBuilder.InsertData(
                table: "PermissoesUsuarios",
                columns: new[] { "UsuarioId", "PermissaoId" },
                values: new object[] { 1, 1 });

            migrationBuilder.CreateIndex(
                name: "IX_Agencias_BancoId",
                table: "Agencias",
                column: "BancoId");

            migrationBuilder.CreateIndex(
                name: "IX_Anexos_ChamadoId",
                table: "Anexos",
                column: "ChamadoId");

            migrationBuilder.CreateIndex(
                name: "IX_Atividades_FornecedorId",
                table: "Atividades",
                column: "FornecedorId");

            migrationBuilder.CreateIndex(
                name: "IX_Chamados_ChamadoPrincipalId",
                table: "Chamados",
                column: "ChamadoPrincipalId");

            migrationBuilder.CreateIndex(
                name: "IX_Chamados_ServicoId",
                table: "Chamados",
                column: "ServicoId");

            migrationBuilder.CreateIndex(
                name: "IX_Chamados_SolicitanteId",
                table: "Chamados",
                column: "SolicitanteId");

            migrationBuilder.CreateIndex(
                name: "IX_Chamados_SolucionadorId",
                table: "Chamados",
                column: "SolucionadorId");

            migrationBuilder.CreateIndex(
                name: "IX_Chamados_StatusId",
                table: "Chamados",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Contas_AgenciaId",
                table: "Contas",
                column: "AgenciaId");

            migrationBuilder.CreateIndex(
                name: "IX_Contas_FornecedorId",
                table: "Contas",
                column: "FornecedorId");

            migrationBuilder.CreateIndex(
                name: "IX_Contatos_FornecedorId",
                table: "Contatos",
                column: "FornecedorId");

            migrationBuilder.CreateIndex(
                name: "IX_Enderecos_EstadoId",
                table: "Enderecos",
                column: "EstadoId");

            migrationBuilder.CreateIndex(
                name: "IX_Fornecedores_EnderecoId",
                table: "Fornecedores",
                column: "EnderecoId");

            migrationBuilder.CreateIndex(
                name: "IX_GruposServicos_DepartamentoId",
                table: "GruposServicos",
                column: "DepartamentoId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissoesFuncionalidades_FuncionalidadeId",
                table: "PermissoesFuncionalidades",
                column: "FuncionalidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissoesUsuarios_PermissaoId",
                table: "PermissoesUsuarios",
                column: "PermissaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Servicos_GrupoServicoId",
                table: "Servicos",
                column: "GrupoServicoId");

            migrationBuilder.CreateIndex(
                name: "IX_Servicos_TipoServicoId",
                table: "Servicos",
                column: "TipoServicoId");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_DepartamentoId",
                table: "Usuarios",
                column: "DepartamentoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Anexos");

            migrationBuilder.DropTable(
                name: "Atividades");

            migrationBuilder.DropTable(
                name: "Contas");

            migrationBuilder.DropTable(
                name: "Contatos");

            migrationBuilder.DropTable(
                name: "PermissoesFuncionalidades");

            migrationBuilder.DropTable(
                name: "PermissoesUsuarios");

            migrationBuilder.DropTable(
                name: "Chamados");

            migrationBuilder.DropTable(
                name: "Agencias");

            migrationBuilder.DropTable(
                name: "Fornecedores");

            migrationBuilder.DropTable(
                name: "Funcionalidades");

            migrationBuilder.DropTable(
                name: "Permissoes");

            migrationBuilder.DropTable(
                name: "Servicos");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Status");

            migrationBuilder.DropTable(
                name: "Bancos");

            migrationBuilder.DropTable(
                name: "Enderecos");

            migrationBuilder.DropTable(
                name: "GruposServicos");

            migrationBuilder.DropTable(
                name: "TiposServico");

            migrationBuilder.DropTable(
                name: "Estados");

            migrationBuilder.DropTable(
                name: "Departamentos");
        }
    }
}
