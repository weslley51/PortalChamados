import { GrupoServicoViewModel } from './grupoServicoViewModel';
import { TipoServicoViewModel } from './tipoServicoViewModel';
var ServicoViewModel = /** @class */ (function () {
    function ServicoViewModel(servico) {
        if (!servico) {
            return;
        }
        this.Id = servico.Id;
        this.Nome = servico.Nome;
        this.Descricao = servico.Descricao;
        this.Procedimento = servico.Procedimento;
        this.Prazo = servico.Prazo;
        this.TipoServico = servico.TipoServico ? servico.TipoServico : new TipoServicoViewModel(null);
        this.GrupoServico = servico.GrupoServico ? servico.GrupoServico : new GrupoServicoViewModel(null);
    }
    return ServicoViewModel;
}());
export { ServicoViewModel };
//# sourceMappingURL=ServicoViewModel.js.map