import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
var EntidadeSimplesComponent = /** @class */ (function () {
    function EntidadeSimplesComponent(api, config, modalService, route) {
        this.api = api;
        this.config = config;
        this.modalService = modalService;
        this.route = route;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    EntidadeSimplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (valor) {
            _this.titulo = valor.titulo;
            _this.endPoint = valor.endPoint;
            _this.buscarEntidades();
        });
        this.formEntidade = new FormGroup({
            Nome: new FormControl('', Validators.required),
        });
    };
    EntidadeSimplesComponent.prototype.abrirModal = function (modal) {
        this.modalService.open(modal, { centered: true });
    };
    EntidadeSimplesComponent.prototype.buscarEntidades = function () {
        var _this = this;
        this.api.get('api/' + this.endPoint, function (result) {
            _this.entidades = result;
        });
    };
    EntidadeSimplesComponent.prototype.salvar = function () {
        var _this = this;
        this.api.post('api/' + this.endPoint, this.formEntidade.value, function (result) {
            _this.entidades.push(result[0]);
        });
    };
    EntidadeSimplesComponent = tslib_1.__decorate([
        Component({ templateUrl: './entidadeSimples.component.html', providers: [NgbModalConfig, NgbModal] }),
        tslib_1.__metadata("design:paramtypes", [ApiService, NgbModalConfig, NgbModal, ActivatedRoute])
    ], EntidadeSimplesComponent);
    return EntidadeSimplesComponent;
}());
export { EntidadeSimplesComponent };
//# sourceMappingURL=entidadeSimples.component.js.map