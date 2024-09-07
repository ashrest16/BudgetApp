using BudgetTracker.Data;
using BudgetTracker.Dtos.Transactions;
using BudgetTracker.Helpers;
using BudgetTracker.Interfaces;
using BudgetTracker.Mappers;
using BudgetTracker.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BudgetTracker.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TransactionController: ControllerBase
{
    private readonly ApplicationDBContext _applicationDbContext;
    private readonly ITransactionRepository _transactionRepository;
    
    public TransactionController(ApplicationDBContext applicationDbContext, ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
        _applicationDbContext = applicationDbContext;
    }
    
    // GET: api/transaction
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var transactions = await _transactionRepository.GetAllAsync(query);
        
        var transactionDtos = transactions
            .Select(transaction => transaction.ToTransactionDto())
            .ToList();
        return Ok(transactionDtos);
    }
    
    // GET: api/transaction/{id}
    [HttpGet("{id:int}")]
    [Authorize]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var transaction = await _transactionRepository.GetByIdAsync(id);

        if (transaction == null) return NotFound();
        var transactionDto = transaction.ToTransactionDto();
        
        return Ok(transactionDto);
    }
    
    
    // POST: api/transaction
    [HttpPost]
    [Authorize]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Create([FromBody] CreateTransactionDto transactionDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var transaction = transactionDto.ToTransactionFromCreateDto();
        await _transactionRepository.CreateAsync(transaction);
        
        return CreatedAtAction(nameof(GetById), new { id = transaction.Id }, transaction.ToTransactionDto());
    }
    
    
    // DELETE: api/transaction/{id}
    [HttpDelete("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var transaction = await _transactionRepository.DeleteAsync(id);
        if (transaction == null) return NotFound();
        
        return NoContent();
    }
}