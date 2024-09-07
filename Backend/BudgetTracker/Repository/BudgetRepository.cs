using BudgetTracker.Interfaces;
using BudgetTracker.Data;
using BudgetTracker.Helpers;
using Microsoft.EntityFrameworkCore;
using Budget = BudgetTracker.Model.Budget;
namespace BudgetTracker.Repository;

public class BudgetRepository:IBudgetRepository
{
    private readonly ApplicationDBContext _applicationDbContext;
    
    public BudgetRepository(ApplicationDBContext context)
    {
        _applicationDbContext = context;
    }
    
    public async Task<List<Budget>> GetAllAsync(string appUserId,QueryObject query)
    {
        var budget= _applicationDbContext.Budgets.AsQueryable();
        
        if (!string.IsNullOrWhiteSpace(query.Name))
        {
            budget = budget.Where(t => t.Name.Contains(query.Name));
        }
        
        var skipNum = (query.PageNumber - 1) * query.PageSize;

        return await budget.Where(t => t.AppUserId == appUserId).Skip(skipNum).Take(query.PageSize).ToListAsync();

    }

    public async Task<Budget?> GetByIdAsync(int id)
    {
        return await _applicationDbContext.Budgets.FindAsync(id);
    }
    
    public async Task<Budget> CreateAsync(Budget budget)
    {
        await _applicationDbContext.Budgets.AddAsync(budget);
        await _applicationDbContext.SaveChangesAsync();
        return budget;
    }

    public async Task<Budget?> DeleteAsync(int id)
    {
        var budget = await _applicationDbContext.Budgets.FindAsync(id);
        if (budget == null)
        {
            return null;
        }
        _applicationDbContext.Remove(budget);
        await _applicationDbContext.SaveChangesAsync();
        return budget;
    }
    
}