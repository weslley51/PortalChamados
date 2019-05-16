var TipoServicoViewModel = /** @class */ (function () {
    function TipoServicoViewModel(tipoServico) {
        if (!tipoServico) {
            return;
        }
        this.Id = tipoServico.Id;
        this.Nome = tipoServico.Nome;
        this.Descricao = tipoServico.Descricao;
    }
    return TipoServicoViewModel;
}());
export { TipoServicoViewModel };
//# sourceMappingURL=tipoServicoViewModel.js.map