import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosRouting } from './servico.routing';
import { ServicoComponent } from '../servico.component';
import { ServicosComponent } from '../servicos.component';
import { ApiService } from '../../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/components/shared.module';
var ServicoModule = /** @class */ (function () {
    function ServicoModule() {
    }
    ServicoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ServicoComponent,
                ServicosComponent
            ],
            imports: [
                NgbModule,
                CommonModule,
                SharedModule,
                ServicosRouting,
                ReactiveFormsModule
            ],
            providers: [ApiService]
        })
    ], ServicoModule);
    return ServicoModule;
}());
export { ServicoModule };
//# sourceMappingURL=servico.module.js.map