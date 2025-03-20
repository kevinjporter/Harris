using HarrisPIMS.API.Context;
using HarrisPIMS.API.Models;
using Microsoft.AspNetCore.Mvc;
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
    [Route("{productId}")]
    public IActionResult GetProduct(int productId)
    {
        if (productId <= 0) return BadRequest($"Product id '{productId} for GetProduct request is invalid");

        var products = _dbContext.Products.FromSql($"EXEC [dbo].[PIMS_Product_Get] @ProductId={productId}");
        var product = products.AsEnumerable().Single();
        return Ok(product);
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
        var newProductId = _dbContext.Database.SqlQuery<int>($"EXEC [dbo].[PIMS_Product_Insert] @ProductName={product.ProductName}, @Price={product.Price}, @Quantity={product.Quantity}");
        return Ok(newProductId);
    }

    [HttpPut]
    public IActionResult UpdateProduct(Product product)
    {
        _dbContext.Database.ExecuteSql($"EXEC [dbo].[PIMS_Product_Update] @ProductID={product.ProductId}, @ProductName={product.ProductName}, @Price={product.Price}, @Quantity={product.Quantity}");
        return Ok();
    }

    [HttpDelete]
    public IActionResult DeleteProduct(int productId)
    {
        if (productId <= 0) return BadRequest($"Product id '{productId} for DeleteProduct request is invalid");

        var result = _dbContext.Database.SqlQuery<int>($"EXEC [dbo].[PIMS_Product_Delete] @ProductID={productId}");
        var productDeleted = result.AsEnumerable().Single() == 1;        
        return Ok(productDeleted);
    }
}