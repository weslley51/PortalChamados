import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChamadosComponent } from './components/chamado/chamados.component';
var routes = [
    { path: 'login', component: LoginComponent },
    { path: 'chamados', component: ChamadosComponent },
    { path: '**', redirectTo: 'login' } /*,
    { path: 'register', component: RegisterComponent }*/
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map