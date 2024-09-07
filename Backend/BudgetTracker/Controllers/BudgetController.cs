using BudgetTracker.Data;
using BudgetTracker.Dtos.Budget;
using BudgetTracker.Helpers;
using BudgetTracker.Interfaces;
using BudgetTracker.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BudgetTracker.Controllers;


[Route("api/budget")]
[ApiController]
public class BudgetController:ControllerBase
{
    private readonly ApplicationDBContext _applicationDbContext;
    private readonly IBudgetRepository _budgetRepository;
    
    public BudgetController(ApplicationDBContext applicationDbContext, IBudgetRepository budgetRepository)
    {
        _budgetRepository = budgetRepository;
        _applicationDbContext = applicationDbContext;
    }
    
    // GET: api/budget
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAllBudget([FromQuery] QueryObject query)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var budgets = await _budgetRepository.GetAllBudgetAsync(query);
        
        var budgetDtos = budgets
            .Select(budget => budget.ToBudgetDto())
            .ToList();
        return Ok(budgetDtos);
    }
    
    // GET: api/budget/{id}
    [HttpGet("{id:int}")]
    [Authorize]
    public async Task<IActionResult> GetByIdBudget([FromRoute] int id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var budget = await _budgetRepository.GetByIdBudgetAsync(id);

        if (budget == null) return NotFound();
        var budgetDto = budget.ToBudgetDto();
        
        return Ok(budgetDto);
    }
    
    // POST: api/budget
    [HttpPost]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CreateBudget([FromBody] CreateBudgetDto budgetDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var budget = budgetDto.ToBudgetFromCreateDto();
        await _budgetRepository.CreateBudgetAsync(budget);
        
        return CreatedAtAction(nameof(GetByIdBudget), new { id = budget.Id }, budget.ToBudgetDto());
    }
    
    // DELETE: api/budget/{id}
    [HttpDelete("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var budget = await _budgetRepository.DeleteBudgetAsync(id);
        if (budget == null) return NotFound();
        
        return NoContent();
    }
    
    
    
    
}