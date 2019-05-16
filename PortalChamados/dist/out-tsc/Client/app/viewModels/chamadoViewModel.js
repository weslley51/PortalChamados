var ChamadoViewModel = /** @class */ (function () {
    function ChamadoViewModel(chamado) {
        if (!chamado) {
            return;
        }
        this.Id = chamado.Id;
        this.Titulo = chamado.Titulo;
        this.Descricao = chamado.Descricao;
        this.Solicitante = chamado.Solicitante;
        this.Solucionador = chamado.Solucionador;
        this.DataSolicitacao = chamado.DataSolicitacao;
    }
    return ChamadoViewModel;
}());
export { ChamadoViewModel };
//# sourceMappingURL=chamadoViewModel.js.map