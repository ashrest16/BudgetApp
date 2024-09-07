using BudgetTracker.Dtos.Transactions;
using BudgetTracker.Model;

namespace BudgetTracker.Mappers;

public static class TransactionMapper
{
    public static TransactionDto ToTransactionDto(this Transaction transactionModel)

    {
        return new TransactionDto{
                Id = transactionModel.Id,
                Name = transactionModel.Name,
                Cost = transactionModel.Cost,
                Types = transactionModel.Types,
                Category = transactionModel.Category,
                Date = transactionModel.Date
        };
    }

    public static Transaction ToTransactionFromCreateDto(this CreateTransactionDto transactionDto)
    {
        return new Transaction
        {
            Name = transactionDto.Name,
            Cost = transactionDto.Cost,
            Types = transactionDto.Types,
            Category = transactionDto.Category,
            Date = transactionDto.Date
        };
    }
}