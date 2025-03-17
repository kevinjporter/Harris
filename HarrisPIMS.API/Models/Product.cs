namespace HarrisPIMS.API.Models;

public class Product
{
    public int ProductID { get; set; }
    public required string ProductName { get; set; }
    public required decimal Price { get; set; }
    public required int Quantity { get; set; }
}
