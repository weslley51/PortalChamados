import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
var ChamadoComponent = /** @class */ (function () {
    function ChamadoComponent(api) {
        this.api = api;
    }
    ChamadoComponent.prototype.ngOnInit = function () {
        this.tituloFiltros = 'Filtros';
        this.isListaCollapsed = false;
        this.isFiltroCollapsed = false;
        this.gerenciandoChamados = false;
        this.buscarChamados();
        this.buscarDepartamentos();
        this.buscarStatus();
        this.buscarUsuarios();
        this.formChamado = new FormGroup({
            Departamento: new FormControl(''),
            Unidade: new FormControl(''),
            Status: new FormControl(''),
            Inicio: new FormControl(''),
            Fim: new FormControl(''),
            AbertoPor: new FormControl(''),
            Solucionador: new FormControl('')
        });
    };
    ChamadoComponent.prototype.buscarChamados = function (idDepartamento, idUnidade, idStatus, idLogin) {
        var _this = this;
        this.api.get('api/Chamado', function (result) {
            _this.chamados = result;
        });
    };
    ChamadoComponent.prototype.buscarDepartamentos = function () {
        var _this = this;
        this.api.get('api/Departamento', function (result) {
            _this.departamentos = result;
        });
    };
    ChamadoComponent.prototype.buscarStatus = function () {
        var _this = this;
        this.api.get('api/Status', function (result) {
            _this.status = result;
        });
    };
    ChamadoComponent.prototype.buscarUsuarios = function () {
        var _this = this;
        this.api.get('api/Usuario', function (result) {
            _this.usuarios = result;
        });
    };
    ChamadoComponent = tslib_1.__decorate([
        Component({ templateUrl: './chamado.component.html' }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], ChamadoComponent);
    return ChamadoComponent;
}());
export { ChamadoComponent };
//# sourceMappingURL=chamado.component.js.map