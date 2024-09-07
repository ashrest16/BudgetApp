using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetTracker.Model;

[Table("Budget")]
public class Budget
{
    [Key]
    [Column("budget_id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [Column("budget_name")]
    [MaxLength(30)]
    public string Name { get; set; } = string.Empty;
    
    [Column("budget_amount")]
    public double Amount { get; set; }

    [Column("budget_spent")] 
    public double Spent { get; set; } = 0.0;
    
    [ForeignKey("AppUser")]
    [Column("app_user_id")]
    public string AppUserId { get; set; }
    
    public AppUser AppUser { get; set; }
}