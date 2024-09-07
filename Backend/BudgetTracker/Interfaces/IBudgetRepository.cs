using BudgetTracker.Model;
using BudgetTracker.Helpers;
using Budget = BudgetTracker.Model.Budget;
namespace BudgetTracker.Interfaces;

public interface IBudgetRepository
{
    Task<List<Budget>> GetAllAsync(string appUserId,QueryObject query);
    Task<Budget?> GetByIdAsync(int id);
    Task<Budget> CreateAsync(Budget budget);
    Task<Budget?> DeleteAsync(int id);
}