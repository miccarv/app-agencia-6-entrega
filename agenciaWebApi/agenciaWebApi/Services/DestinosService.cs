using AgenciaWebApi.Context;
using AgenciaWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AgenciaWebApi.Services
{
    public class DestinosService : IDestinoService
    {
        private readonly AppDbContext _context;

        public DestinosService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateDestino(Destino destino)
        {
            _context.Destinos.Add(destino);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Destino>> GetDestinos()
        {
            try
            {
                return await _context.Destinos.ToListAsync();
            }
            catch
            {

                throw;
            }
            
        }
    }
}
