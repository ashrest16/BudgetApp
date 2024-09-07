namespace BudgetTracker.Dtos.Transactions;
using System.ComponentModel.DataAnnotations;

public class TransactionDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    [MinLength(3, ErrorMessage = "Name must be 3 characters")]
    [MaxLength(20, ErrorMessage = "Name cannot be more than 20 characters")]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [Range(1,1000000)]
    public double Cost { get; set; }
    
    [Required]
    [MinLength(6, ErrorMessage = "Type must be 3 characters")]
    [MaxLength(20, ErrorMessage = "Type cannot be more than 20 characters")]
    public string Types { get; set; } = string.Empty;
    
    [Required]
    [MinLength(3, ErrorMessage = "Category must be 3 characters")]
    [MaxLength(20, ErrorMessage = "Category cannot be more than 20 characters")]
    public string Category { get; set; } = string.Empty;
    
    [Required]
    [MinLength(10, ErrorMessage = "Date must in YYYY-MM-DD Format")]
    public string Date { get; set; } = string.Empty;
}