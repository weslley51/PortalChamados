import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../authentication/auth.guard';
import { GruposServicoComponent } from '../gruposServico.component';
var routes = [
    {
        path: 'gruposServico', component: GruposServicoComponent,
        canActivate: [AuthGuard]
    }
];
var GrupoServicoRouting = /** @class */ (function () {
    function GrupoServicoRouting() {
    }
    GrupoServicoRouting = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], GrupoServicoRouting);
    return GrupoServicoRouting;
}());
export { GrupoServicoRouting };
//# sourceMappingURL=grupoServico.routing.js.map