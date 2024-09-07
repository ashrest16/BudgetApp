namespace BudgetTracker.Dtos.Budget;
using System.ComponentModel.DataAnnotations;
public class CreateBudgetDto
{
    [Required]
    [MinLength(3, ErrorMessage = "Name must be 3 characters")]
    [MaxLength(20, ErrorMessage = "Name cannot be more than 20 characters")]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [Range(1,1000000)]
    public double Amount { get; set; }
    
    [Required]
    [Range(0,1000000)]
    public double Spent { get; set; }
}