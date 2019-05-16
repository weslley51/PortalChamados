import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
var ServicosComponent = /** @class */ (function () {
    function ServicosComponent(api, config, modalService) {
        this.api = api;
        this.config = config;
        this.modalService = modalService;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ServicosComponent.prototype.ngOnInit = function () {
        this.isFiltroCollapsed = false;
        this.gerenciandoServicos = false;
        //this.buscarServicos();
        this.buscarDepartamentos();
        this.buscarStatus();
        this.buscarUsuarios();
        this.formServico = new FormGroup({
            Departamento: new FormControl(''),
            Unidade: new FormControl(''),
            Status: new FormControl(''),
            Inicio: new FormControl(''),
            Fim: new FormControl(''),
            AbertoPor: new FormControl(''),
            Solucionador: new FormControl('')
        });
        this.formSolucionador = new FormGroup({
            Solucionador: new FormControl('', Validators.required)
        });
    };
    ServicosComponent.prototype.abrirModal = function (modal) {
        this.modalService.open(modal);
    };
    //buscarServicos(idDepartamento?: number, idUnidade?: number, idStatus?: number, idLogin?: number) {
    //    this.api.get<IServicoViewModel[]>('api/Servico', (result) => {
    //        this.servicos = result;
    //    });
    //}
    ServicosComponent.prototype.buscarDepartamentos = function () {
        var _this = this;
        this.api.get('api/Departamento', function (result) {
            _this.departamentos = result;
        });
    };
    ServicosComponent.prototype.buscarStatus = function () {
        var _this = this;
        this.api.get('api/Status', function (result) {
            _this.status = result;
        });
    };
    ServicosComponent.prototype.buscarUsuarios = function () {
        var _this = this;
        this.api.get('api/Usuario', function (result) {
            _this.usuarios = result;
        });
    };
    ServicosComponent = tslib_1.__decorate([
        Component({ templateUrl: './servicos.component.html', providers: [NgbModalConfig, NgbModal] }),
        tslib_1.__metadata("design:paramtypes", [ApiService, NgbModalConfig, NgbModal])
    ], ServicosComponent);
    return ServicosComponent;
}());
export { ServicosComponent };
//# sourceMappingURL=servicos.component.js.map