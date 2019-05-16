import { FuncionalidadeViewModel } from './funcionalidadeViewModel';
var PermissaoViewModel = /** @class */ (function () {
    function PermissaoViewModel(permissao) {
        if (!permissao) {
            return;
        }
        this.Id = permissao.Id;
        this.Nome = permissao.Nome;
        this.Descricao = permissao.Descricao;
        this.Funcionalidades = permissao.Funcionalidades ? permissao.Funcionalidades : [new FuncionalidadeViewModel(null)];
    }
    return PermissaoViewModel;
}());
export { PermissaoViewModel };
//# sourceMappingURL=permissaoViewModel.js.map