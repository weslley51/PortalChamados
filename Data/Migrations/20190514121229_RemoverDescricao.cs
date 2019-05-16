using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class RemoverDescricao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "TiposServico");

            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Funcionalidades");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "TiposServico",
                maxLength: 250,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Funcionalidades",
                maxLength: 250,
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Funcionalidades",
                keyColumn: "Id",
                keyValue: 1,
                column: "Descricao",
                value: "Gerenciamento dos cadastros administrativos do sistema");
        }
    }
}
