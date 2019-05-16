namespace Domain.Utils
{
	public static class Enums
    {
		public enum Prioridade : short
		{
			Urgente = 1,
			MuitoUrgente
		}

		public enum Nota : short
		{
			MuitoRuim = 1,
			Ruim,
			Razoavel,
			Bom,
			MuitoBom
		}

		public enum SLA : short
		{
			Finalizado = 1,
			Parado,
			Atrasado,
			VenceHoje,
			DentroPrazo
		};
	}
}
