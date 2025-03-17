using HarrisPIMS.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HarrisPIMS.API.Context;

public class PIMSDbContext : DbContext
{
    public PIMSDbContext(DbContextOptions options) : base(options)
    {
    }

    protected PIMSDbContext()
    {
    }

    public DbSet<Product> Products { get; set; }
}
