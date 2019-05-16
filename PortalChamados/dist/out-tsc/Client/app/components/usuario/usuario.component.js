import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(api) {
        this.api = api;
        this.titulo = 'Usuário';
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.buscarUsuarios();
    };
    UsuarioComponent.prototype.buscarUsuarios = function () {
        var _this = this;
        this.api.get('api/Usuario', function (result) {
            _this.entidades = result;
        });
    };
    UsuarioComponent = tslib_1.__decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map