import * as tslib_1 from "tslib";
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { UsuarioViewModel } from '../../viewModels/usuarioViewModel';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'chamados';
        this.formLogin = new FormGroup({
            Login: new FormControl('', Validators.required),
            Senha: new FormControl('', Validators.required)
        });
        var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (usuarioLogado && usuarioLogado.Token) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            this.router.navigate(['chamados']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var usuario = new UsuarioViewModel(this.formLogin.value);
        this.api.post('api/Usuario/Autenticar', usuario, function (result) {
            localStorage.setItem('usuarioLogado', JSON.stringify(result));
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            ActivatedRoute,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map