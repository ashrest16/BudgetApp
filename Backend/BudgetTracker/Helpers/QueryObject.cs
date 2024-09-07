namespace BudgetTracker.Helpers;

public class QueryObject
{
    public string? Name { get; set; } = null;
    public string? Type { get; set; } = null;
    public string? Category { get; set; } = null;
    public string? SortBy { get; set; } = null;
    public int PageNumber { get; set; } = 1;
    public int PageSize { get; set; } = 20;
}