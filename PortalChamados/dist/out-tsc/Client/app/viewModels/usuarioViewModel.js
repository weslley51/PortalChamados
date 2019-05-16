import { DepartamentoViewModel } from './departamentoViewModel';
import { PermissaoViewModel } from './permissaoViewModel';
var UsuarioViewModel = /** @class */ (function () {
    function UsuarioViewModel(usuario) {
        if (!usuario) {
            return;
        }
        this.Login = usuario.Login;
        this.Senha = usuario.Senha;
        this.Token = usuario.Token;
        this.Departamento = usuario.Departamento ? usuario.Departamento : new DepartamentoViewModel(null);
        this.Permissoes = usuario.Permissoes ? usuario.Permissoes : [new PermissaoViewModel(null)];
    }
    return UsuarioViewModel;
}());
export { UsuarioViewModel };
//# sourceMappingURL=usuarioViewModel.js.map