using BudgetTracker.Helpers;
using Transaction = BudgetTracker.Model.Transaction;

namespace BudgetTracker.Interfaces;

public interface ITransactionRepository
{
    Task<List<Transaction>> GetAllAsync(QueryObject query);
    Task<Transaction?> GetByIdAsync(int id);
    Task<Transaction> CreateAsync(Transaction transaction);
    Task<Transaction?> DeleteAsync(int id);

    
}