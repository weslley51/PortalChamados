import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/components/shared.module';
import { EntidadeSimplesComponent } from '../entidadeSimples.component';
import { EntidadeSimplesRouting } from './entidadeSimples.routing';
var EntidadeSimplesModule = /** @class */ (function () {
    function EntidadeSimplesModule() {
    }
    EntidadeSimplesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                EntidadeSimplesComponent,
            ],
            imports: [
                NgbModule,
                CommonModule,
                SharedModule,
                EntidadeSimplesRouting,
                ReactiveFormsModule
            ],
            providers: [ApiService]
        })
    ], EntidadeSimplesModule);
    return EntidadeSimplesModule;
}());
export { EntidadeSimplesModule };
//# sourceMappingURL=entidadeSimples.module.js.map