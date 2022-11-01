using AgenciaWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AgenciaWebApi.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }

        public DbSet<Destino> Destinos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Destino>().HasData(
                new Destino
                {
                    Id = 1,
                    Local = "Fortaleza",
                    Data = "22/02/2022",
                    Duracao = "2 semanas"
                },

                new Destino
                {
                    Id = 2,
                    Local = "Sao Paulo",
                    Data = "24/02/2022",
                    Duracao = "3 semanas"
                }
                );
        }
    }
}
