using BudgetTracker.Model;
using BudgetTracker.Helpers;
using Budget = BudgetTracker.Model.Budget;
namespace BudgetTracker.Interfaces;

public interface IBudgetRepository
{
    Task<List<Budget>> GetAllBudgetAsync(QueryObject query);
    Task<Budget?> GetByIdBudgetAsync(int id);
    Task<Budget> CreateBudgetAsync(Budget budget);
    Task<Budget?> DeleteBudgetAsync(int id);
}