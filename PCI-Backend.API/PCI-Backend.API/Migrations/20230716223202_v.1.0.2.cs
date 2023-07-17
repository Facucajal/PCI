using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PCI_Backend.API.Migrations
{
    /// <inheritdoc />
    public partial class v102 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Titular",
                table: "TarjetaCredito",
                newName: "titular");

            migrationBuilder.RenameColumn(
                name: "NumeroTarjeta",
                table: "TarjetaCredito",
                newName: "numeroTarjeta");

            migrationBuilder.RenameColumn(
                name: "FechaInicio",
                table: "TarjetaCredito",
                newName: "fechaInicio");

            migrationBuilder.RenameColumn(
                name: "FechaExpiracion",
                table: "TarjetaCredito",
                newName: "fechaExpiracion");

            migrationBuilder.RenameColumn(
                name: "CVV",
                table: "TarjetaCredito",
                newName: "cvv");

            migrationBuilder.AddColumn<int>(
                name: "categoria",
                table: "TarjetaCredito",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "categoria",
                table: "TarjetaCredito");

            migrationBuilder.RenameColumn(
                name: "titular",
                table: "TarjetaCredito",
                newName: "Titular");

            migrationBuilder.RenameColumn(
                name: "numeroTarjeta",
                table: "TarjetaCredito",
                newName: "NumeroTarjeta");

            migrationBuilder.RenameColumn(
                name: "fechaInicio",
                table: "TarjetaCredito",
                newName: "FechaInicio");

            migrationBuilder.RenameColumn(
                name: "fechaExpiracion",
                table: "TarjetaCredito",
                newName: "FechaExpiracion");

            migrationBuilder.RenameColumn(
                name: "cvv",
                table: "TarjetaCredito",
                newName: "CVV");
        }
    }
}
