using Microsoft.AspNetCore.Identity;

namespace BudgetTracker.Model;

public class AppUser : IdentityUser
{
    public List<Transaction> Transactions { get; set; } = new List<Transaction>();
}