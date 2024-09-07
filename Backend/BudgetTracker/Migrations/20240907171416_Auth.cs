using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BudgetTracker.Migrations
{
    /// <inheritdoc />
    public partial class Auth : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budget_AspNetUsers_AppUserId",
                table: "Budget");

            migrationBuilder.DropForeignKey(
                name: "FK_transaction_AspNetUsers_AppUserId",
                table: "transaction");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1a58a702-cce3-4f18-893b-959c4f27711c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4842d553-2d00-4592-943c-6a11c0a045f0");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "transaction",
                newName: "app_user_id");

            migrationBuilder.RenameIndex(
                name: "IX_transaction_AppUserId",
                table: "transaction",
                newName: "IX_transaction_app_user_id");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "Budget",
                newName: "app_user_id");

            migrationBuilder.RenameIndex(
                name: "IX_Budget_AppUserId",
                table: "Budget",
                newName: "IX_Budget_app_user_id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e39d0b96-c00e-4749-9ab2-a6c4ee0e0fb8", null, "USER", "USER" },
                    { "ec17b359-de3d-4e8b-9cca-e80dfe771fba", null, "ADMIN", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Budget_AspNetUsers_app_user_id",
                table: "Budget",
                column: "app_user_id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_transaction_AspNetUsers_app_user_id",
                table: "transaction",
                column: "app_user_id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Budget_AspNetUsers_app_user_id",
                table: "Budget");

            migrationBuilder.DropForeignKey(
                name: "FK_transaction_AspNetUsers_app_user_id",
                table: "transaction");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e39d0b96-c00e-4749-9ab2-a6c4ee0e0fb8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec17b359-de3d-4e8b-9cca-e80dfe771fba");

            migrationBuilder.RenameColumn(
                name: "app_user_id",
                table: "transaction",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_transaction_app_user_id",
                table: "transaction",
                newName: "IX_transaction_AppUserId");

            migrationBuilder.RenameColumn(
                name: "app_user_id",
                table: "Budget",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Budget_app_user_id",
                table: "Budget",
                newName: "IX_Budget_AppUserId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1a58a702-cce3-4f18-893b-959c4f27711c", null, "ADMIN", "ADMIN" },
                    { "4842d553-2d00-4592-943c-6a11c0a045f0", null, "USER", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Budget_AspNetUsers_AppUserId",
                table: "Budget",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_transaction_AspNetUsers_AppUserId",
                table: "transaction",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
