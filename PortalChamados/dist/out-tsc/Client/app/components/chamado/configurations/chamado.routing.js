import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../authentication/auth.guard';
import { ChamadosComponent } from '../chamados.component';
import { ChamadoComponent } from '../chamado.component';
var routes = [
    {
        path: 'chamados', component: ChamadosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'chamado/novo', component: ChamadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'chamado/visualizar', component: ChamadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'chamado/editar', component: ChamadoComponent,
        canActivate: [AuthGuard]
    }
];
var ChamadosRouting = /** @class */ (function () {
    function ChamadosRouting() {
    }
    ChamadosRouting = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], ChamadosRouting);
    return ChamadosRouting;
}());
export { ChamadosRouting };
//# sourceMappingURL=chamado.routing.js.map