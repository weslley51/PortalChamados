import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FuncoesGerais } from '../../shared/utils/funcoesGerais';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
var ServicoComponent = /** @class */ (function () {
    function ServicoComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    ServicoComponent.prototype.ngOnInit = function () {
        this.buscarGrupos();
        this.buscarTipos();
        this.formServico = new FormGroup({
            Nome: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            Descricao: new FormControl('', Validators.maxLength(500)),
            Procedimento: new FormControl('', Validators.maxLength(500)),
            Prazo: new FormControl('', [Validators.required, Validators.min(1)]),
            TipoServico: new FormControl('', Validators.required),
            GrupoServico: new FormControl('', Validators.required)
        });
        var id = null;
        if (id)
            this.buscarServico(id);
    };
    ServicoComponent.prototype.buscarServico = function (id) {
        var _this = this;
        this.api.get('api/Servico/' + id, function (data) {
            _this.formServico.get('').setValue('data.');
        });
    };
    ServicoComponent.prototype.buscarGrupos = function () {
        var _this = this;
        this.api.get('api/Departamento', function (result) {
            _this.grupos = result;
        });
    };
    ServicoComponent.prototype.buscarTipos = function (idDepartamento) {
        var _this = this;
        this.api.get('api/Departamento', function (result) {
            _this.tipos = result;
        });
    };
    ServicoComponent.prototype.apenasInteirosPositivos = function (event) {
        if (!FuncoesGerais.inteiroPositivo(event.key))
            event.preventDefault();
    };
    ServicoComponent.prototype.salvar = function () {
        var _this = this;
        this.api.post('api/Servico', this.formServico.value, function (result) {
            Swal.fire({
                type: 'success',
                title: 'Sucesso!',
                text: 'Serviço salvo com sucesso!'
            });
            setTimeout(function () { return _this.router.navigate(['/servico/visualizar/' + result.Id]); }, 5 * 1000);
        });
    };
    ServicoComponent.prototype.limpar = function () {
        this.formServico.reset();
    };
    ServicoComponent = tslib_1.__decorate([
        Component({ providers: [FuncoesGerais], templateUrl: './servico.component.html' }),
        tslib_1.__metadata("design:paramtypes", [ApiService, Router])
    ], ServicoComponent);
    return ServicoComponent;
}());
export { ServicoComponent };
//# sourceMappingURL=servico.component.js.map