using HarrisPIMS.API.Context;
using HarrisPIMS.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace HarrisPIMS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly PIMSDbContext _dbContext;
    public ProductsController(PIMSDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetAllProducts()
    {
        var productsList = _dbContext.Products.FromSql($"EXEC [dbo].[PIMS_Product_GetList]").ToList();
        return Ok(productsList);
    }

    [HttpPost]
    public IActionResult SaveProduct(Product product)
    {
        //TODO: Validate data before inserting 
        var newProductId = _dbContext.Database.SqlQuery<int>($"EXEC [dbo].[PIMS_Product_Insert] @ProductName={product.ProductName}, @Price={product.Price}, @Quantity={product.Quantity}");

        // if newProductId <= 0 return BadRequest
        return Ok(newProductId);
    }

    [HttpPut]
    public IActionResult UpdateProduct(int productId, string productName, decimal price, int quantity)
    {
        //TODO: Validate data before updating
        var numberOfRowsAffected = _dbContext.Database.SqlQuery<int>($"EXEC [dbo].[PIMS_Product_Update] @ProductID={productId}, @ProductName={productName}, @Price={price}, @Quantity={quantity}");

        // if numberOfRowsAffected != 1 return BadRequest
        return Ok();
    }

    [HttpDelete]
    public IActionResult DeleteProduct(int productId)
    {
        //TODO: Check product exists before removal

        //TODO: Begin transaction
        var numberOfDeletedProducts = _dbContext.Database.SqlQuery<int>($"EXEC [dbo].[PIMS_Product_Delete] @ProductID={productId}");

        // if numberOfDeletedProducts != 1 return BadRequest
        // if BadRequest, rollback transaction
        return Ok();
    }
}
