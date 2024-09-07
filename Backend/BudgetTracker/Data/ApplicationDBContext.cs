using BudgetTracker.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace BudgetTracker.Data;

public class ApplicationDBContext : IdentityDbContext<AppUser>
{
    private readonly IConfiguration _configuration;

    public ApplicationDBContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<Budget> Budgets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("DefaultConnection"));
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<Transaction>()
            .HasOne(t => t.AppUser)
            .WithMany(u => u.Transactions)
            .HasForeignKey(t => t.AppUserId)
            .OnDelete(DeleteBehavior.Cascade);
        builder.Entity<Budget>()
            .HasOne(b => b.AppUser)
            .WithMany(u => u.Budgets)
            .HasForeignKey(b => b.AppUserId)
            .OnDelete(DeleteBehavior.Cascade);
        List<IdentityRole> roles =
        [
            new IdentityRole
            {
                Name = "ADMIN",
                NormalizedName = "ADMIN"
            },

            new IdentityRole
            {
                Name = "USER",
                NormalizedName = "USER"
            }

        ];
        builder.Entity<IdentityRole>().HasData(roles);
    }
    
    
}