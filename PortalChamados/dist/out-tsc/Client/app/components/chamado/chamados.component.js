import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
var ChamadosComponent = /** @class */ (function () {
    function ChamadosComponent(api, config, modalService) {
        this.api = api;
        this.config = config;
        this.modalService = modalService;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ChamadosComponent.prototype.ngOnInit = function () {
        this.isFiltroCollapsed = false;
        this.gerenciandoChamados = false;
        this.buscarDepartamentos();
        this.buscarStatus();
        this.buscarUsuarios();
        //this.buscarEntidades<IDepartamentoViewModel[]>('Departamento', this.departamentos);
        //this.buscarEntidades<IStatusViewModel[]>('Status', this.status);
        //this.buscarEntidades<IUsuarioViewModel[]>('Usuario', this.usuarios);
        this.formFiltros = new FormGroup({
            Departamento: new FormControl(''),
            Status: new FormControl(''),
            Situacao: new FormControl(''),
            Inicio: new FormControl(''),
            Fim: new FormControl(''),
            Solicitante: new FormControl(''),
            Solucionador: new FormControl('')
        });
        this.formChamados = new FormGroup({
            Chamados: new FormControl('', Validators.required),
            Solucionador: new FormControl('', Validators.required)
        });
    };
    ChamadosComponent.prototype.abrirModal = function (modal) {
        this.modalService.open(modal);
    };
    ChamadosComponent.prototype.buscarEntidades = function (url, lista) {
        this.api.get('api/' + url, function (result) { return lista = result; });
    };
    ChamadosComponent.prototype.buscarDepartamentos = function () {
        var _this = this;
        this.api.get('api/Departamento', function (result) { return _this.departamentos = result; });
    };
    ChamadosComponent.prototype.buscarStatus = function () {
        var _this = this;
        this.api.get('api/Status', function (result) { return _this.status = result; });
    };
    ChamadosComponent.prototype.buscarUsuarios = function () {
        var _this = this;
        this.api.get('api/Usuario', function (result) { return _this.usuarios = result; });
    };
    ChamadosComponent.prototype.buscarChamados = function () {
        var _this = this;
        this.api.getWithFilter('api/Chamado', this.formFiltros.value, function (result) { return _this.chamados = result; });
    };
    ChamadosComponent.prototype.limpar = function () {
        this.formFiltros.reset();
    };
    ChamadosComponent.prototype.onChangeChamados = function (selecionado) {
        console.log(selecionado);
    };
    ChamadosComponent = tslib_1.__decorate([
        Component({ templateUrl: './chamados.component.html', providers: [NgbModalConfig, NgbModal] }),
        tslib_1.__metadata("design:paramtypes", [ApiService, NgbModalConfig, NgbModal])
    ], ChamadosComponent);
    return ChamadosComponent;
}());
export { ChamadosComponent };
//# sourceMappingURL=chamados.component.js.map