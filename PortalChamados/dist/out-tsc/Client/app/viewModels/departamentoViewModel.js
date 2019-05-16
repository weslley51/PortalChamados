var DepartamentoViewModel = /** @class */ (function () {
    function DepartamentoViewModel(departamento) {
        if (!departamento) {
            return;
        }
        this.Id = departamento.Id;
        this.Nome = departamento.Nome;
        this.Sigla = departamento.Sigla;
    }
    return DepartamentoViewModel;
}());
export { DepartamentoViewModel };
//# sourceMappingURL=departamentoViewModel.js.map