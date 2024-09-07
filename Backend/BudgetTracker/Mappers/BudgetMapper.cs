using BudgetTracker.Dtos.Budget;
using BudgetTracker.Model;
namespace BudgetTracker.Mappers;

public static class BudgetMapper
{
    public static BudgetDto ToBudgetDto(this Budget budgetModel)

    {
        return new BudgetDto{
            Id = budgetModel.Id,
            Name = budgetModel.Name,
            Amount = budgetModel.Amount,
            Spent = budgetModel.Spent,
        };
    }
    public static Budget ToBudgetFromCreateDto(this CreateBudgetDto budgetDto)
    {
        return new Budget
        {
            Name = budgetDto.Name,
            Amount = budgetDto.Amount,
            Spent = budgetDto.Spent,
        };
    }
}