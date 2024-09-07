using BudgetTracker.Data;
using BudgetTracker.Helpers;
using BudgetTracker.Interfaces;
using Microsoft.EntityFrameworkCore;
using Transaction = BudgetTracker.Model.Transaction;


namespace BudgetTracker.Repository;

public class TransactionRepository:ITransactionRepository
{
    private readonly ApplicationDBContext _applicationDbContext;

    public TransactionRepository(ApplicationDBContext context)
    {
        _applicationDbContext = context;
    }
    public async Task<List<Transaction>> GetAllAsync(QueryObject query)
    {
        var transactions= _applicationDbContext.Transactions.AsQueryable();
        if (!string.IsNullOrWhiteSpace(query.Name))
        {
            transactions = transactions.Where(t => t.Name.Contains(query.Name));
        }
        if (!string.IsNullOrWhiteSpace(query.Category))
        {
            transactions = transactions.Where(t => t.Category.Contains(query.Category));
        }
        if (!string.IsNullOrWhiteSpace(query.Type))
        {
            transactions = transactions.Where(t => t.Types.Contains(query.Type));
        }

        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("Name", StringComparison.Ordinal))
            {
                transactions = transactions.OrderBy(t => t.Name);
            }
        }

        var skipNum = (query.PageNumber - 1) * query.PageSize;

        return await transactions.Skip(skipNum).Take(query.PageSize).ToListAsync();

    }

    public async Task<Transaction?> GetByIdAsync(int id)
    { 
        return await _applicationDbContext.Transactions.FindAsync(id);
    }

    public async Task<Transaction> CreateAsync(Transaction transaction)
    {
        await _applicationDbContext.Transactions.AddAsync(transaction);
        await _applicationDbContext.SaveChangesAsync();
        return transaction;
    }

    public async Task<Transaction?> DeleteAsync(int id)
    {
        var transaction = await _applicationDbContext.Transactions.FindAsync(id);
        if (transaction == null)
        {
            return null;
        }
        _applicationDbContext.Remove(transaction);
        await _applicationDbContext.SaveChangesAsync();
        return transaction;
    }
    
    
}