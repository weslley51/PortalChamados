import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CardComponent
            ],
            imports: [
                NgbModule,
                CommonModule,
            ],
            exports: [CardComponent],
            providers: [ApiService]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map