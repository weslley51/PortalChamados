import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../authentication/auth.guard';
import { EntidadeSimplesComponent } from '../entidadeSimples.component';
var routes = [
    {
        path: 'tipoServico', component: EntidadeSimplesComponent, data: { titulo: 'Tipos de Serviço', endPoint: 'TipoServico' },
        canActivate: [AuthGuard]
    }
];
var EntidadeSimplesRouting = /** @class */ (function () {
    function EntidadeSimplesRouting() {
    }
    EntidadeSimplesRouting = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], EntidadeSimplesRouting);
    return EntidadeSimplesRouting;
}());
export { EntidadeSimplesRouting };
//# sourceMappingURL=entidadeSimples.routing.js.map