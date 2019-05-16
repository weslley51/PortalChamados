import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoServicoRouting } from './grupoServico.routing';
import { GruposServicoComponent } from '../gruposServico.component';
import { ApiService } from '../../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/components/shared.module';
var GrupoServicoModule = /** @class */ (function () {
    function GrupoServicoModule() {
    }
    GrupoServicoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                GruposServicoComponent,
            ],
            imports: [
                NgbModule,
                CommonModule,
                SharedModule,
                GrupoServicoRouting,
                ReactiveFormsModule
            ],
            providers: [ApiService]
        })
    ], GrupoServicoModule);
    return GrupoServicoModule;
}());
export { GrupoServicoModule };
//# sourceMappingURL=grupoServico.module.js.map