using BudgetTracker.Model;

namespace BudgetTracker.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}