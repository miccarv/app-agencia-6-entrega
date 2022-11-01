using AgenciaWebApi.Models;
using AgenciaWebApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AgenciaWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinosController : ControllerBase
    {
        private IDestinoService _destinoService;

        public DestinosController(IDestinoService destinoService)
        {
            _destinoService = destinoService;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Destino>>> getDestinos()
        {
            try
            {
                var destinos = await _destinoService.GetDestinos();
                return Ok(destinos);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpPost]

        public async Task<ActionResult> Create(Destino destino)
        {
            try
            {
                await _destinoService.CreateDestino(destino);
                return Ok(destino);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}
