var FuncionalidadeViewModel = /** @class */ (function () {
    function FuncionalidadeViewModel(funcionalidade) {
        if (!funcionalidade) {
            return;
        }
        this.Id = funcionalidade.Id;
        this.Nome = funcionalidade.Nome;
        this.Salvar = funcionalidade.Salvar;
        this.Alterar = funcionalidade.Alterar;
        this.Deletar = funcionalidade.Deletar;
        this.Consultar = funcionalidade.Consultar;
    }
    return FuncionalidadeViewModel;
}());
export { FuncionalidadeViewModel };
//# sourceMappingURL=funcionalidadeViewModel.js.map