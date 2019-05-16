using BaseApiArchitecture.Domain;
using System.Linq;

namespace Domain.ViewModels
{
	public class AnexoViewModel : BaseEntity
	{
		public int Id { get; set; }
		public string Caminho { get; set; }
		public string Nome { get { return Caminho.Split('\\').LastOrDefault(); } }
		public string Extensao { get { return Nome.Split('.').LastOrDefault(); } }		
	}
}
