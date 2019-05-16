import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
var GruposServicoComponent = /** @class */ (function () {
    function GruposServicoComponent(api, config, modalService, route) {
        this.api = api;
        this.config = config;
        this.modalService = modalService;
        this.route = route;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    GruposServicoComponent.prototype.ngOnInit = function () {
        this.buscarChamados();
        this.formGrupoServico = new FormGroup({
            Nome: new FormControl('', Validators.required),
            Descricao: new FormControl('', Validators.maxLength(500)),
        });
    };
    GruposServicoComponent.prototype.abrirModal = function (modal) {
        this.modalService.open(modal);
    };
    GruposServicoComponent.prototype.buscarChamados = function (idDepartamento, idUnidade, idStatus, idLogin) {
        var _this = this;
        this.api.get('api/GrupoServico', function (result) {
            _this.grupos = result;
        });
    };
    GruposServicoComponent = tslib_1.__decorate([
        Component({ templateUrl: './gruposServico.component.html', providers: [NgbModalConfig, NgbModal] }),
        tslib_1.__metadata("design:paramtypes", [ApiService, NgbModalConfig, NgbModal, ActivatedRoute])
    ], GruposServicoComponent);
    return GruposServicoComponent;
}());
export { GruposServicoComponent };
//# sourceMappingURL=gruposServico.component.js.map