using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetTracker.Model;

[Table("transaction")]
public class Transaction
{
    [Key]
    [Column("transaction_id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [Column("transaction_name")]
    [MaxLength(30)]
    public string Name { get; set; } = string.Empty;
    [Column("transaction_cost")]
    public double Cost { get; set; }
    [Column("transaction_type")]
    [MaxLength(10)]
    public string Types { get; set; } = string.Empty;
    [Column("transaction_category")]
    [MaxLength(20)]
    public string Category { get; set; } = string.Empty;
    
    [Column("transaction_date")]
    [MaxLength(10)]
    public string Date{ get; set; } = String.Empty;
    
    [ForeignKey("AppUser")]
    [Column("app_user_id")]
    public string AppUserId { get; set; }
    
    public AppUser AppUser { get; set; }
}