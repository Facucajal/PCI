using System.ComponentModel.DataAnnotations;

namespace PCI_Backend.API.Models
{
    public class TarjetaCredito
    {
        public int id { get; set; }
        [Required]
        public String titular { get; set; }
        [Required]
        public String numeroTarjeta { get; set; }
        [Required]
        public DateTime fechaExpiracion { get; set; }
        [Required]
        public String cvv { get; set; }
        public DateTime fechaInicio { get; set; }

        public Categoria categoria { get; set; }

        public String banco { get; set; }

    }
}
