import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosRouting } from './chamado.routing';
import { ChamadoComponent } from '../chamado.component';
import { ChamadosComponent } from '../chamados.component';
import { ApiService } from '../../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/components/shared.module';
var ChamadoModule = /** @class */ (function () {
    function ChamadoModule() {
    }
    ChamadoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ChamadoComponent,
                ChamadosComponent
            ],
            imports: [
                NgbModule,
                CommonModule,
                SharedModule,
                ChamadosRouting,
                ReactiveFormsModule
            ],
            providers: [ApiService]
        })
    ], ChamadoModule);
    return ChamadoModule;
}());
export { ChamadoModule };
//# sourceMappingURL=chamado.module.js.map