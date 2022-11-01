using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgenciaWebApi.Models
{

    [Table("Destinos")]
    public class Destino
    {
        public int Id { get; set; }
        [Required]
        [StringLength(40)]
        public string Local { get; set; }
        [Required]
        [StringLength(20)]
        public string Data { get; set; }
        [Required]
        [StringLength(40)]
        public string Duracao { get; set; }

    }
}
