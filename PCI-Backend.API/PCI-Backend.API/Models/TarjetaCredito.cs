using System.ComponentModel.DataAnnotations;

namespace PCI_Backend.API.Models
{
    public class TarjetaCredito
    {
        public int id { get; set; }
        [Required]
        public String Titular { get; set; }
        [Required]
        public String NumeroTarjeta { get; set; }
        [Required]
        public DateTime FechaExpiracion { get; set; }
        [Required]
        public String CVV { get; set; }
    }
}
