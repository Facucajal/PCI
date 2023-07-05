using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace PCI_Backend.API.Models
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
        }

    }
       
}
