import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../authentication/auth.guard';
import { ServicosComponent } from '../servicos.component';
import { ServicoComponent } from '../servico.component';
var routes = [
    {
        path: 'servicos', component: ServicosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'servico/novo', component: ServicoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'servico/visualizar/:id', component: ServicoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'servico/editar/:id', component: ServicoComponent,
        canActivate: [AuthGuard]
    }
];
var ServicosRouting = /** @class */ (function () {
    function ServicosRouting() {
    }
    ServicosRouting = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], ServicosRouting);
    return ServicosRouting;
}());
export { ServicosRouting };
//# sourceMappingURL=servico.routing.js.map