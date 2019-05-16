import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CardComponent.prototype, "titulo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CardComponent.prototype, "isCollapsed", void 0);
    CardComponent = tslib_1.__decorate([
        Component({
            selector: 'card',
            templateUrl: './card.component.html',
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map