using AutoMapper;
using Domain.Models;
using Domain.ViewModels;
using System.Linq;

namespace PortalChamados.Core.Configurations
{
	public class AutoMapperProfile : Profile
    {
		public AutoMapperProfile()
		{	
			CreateMap<Anexo, AnexoViewModel>();
			CreateMap<Chamado, ChamadoViewModel>();
			CreateMap<Endereco, EnderecoViewModel>();

			CreateMap<Fornecedor, FornecedorViewModel>()
				.ForMember(dest => dest.Emails, opt => opt.MapFrom(src => src.Contatos.Where(x => x.Email.Value)))
				.ForMember(dest => dest.Telefones, opt => opt.MapFrom(src => src.Contatos.Where(x => !x.Email.Value)));

			CreateMap<Usuario, UsuarioViewModel>()
				.ForMember(dest => dest.Permissoes, opt => opt.MapFrom(src => src.PermissoesUsuario.Select(x => x.Permissao)));
		}
    }
}
