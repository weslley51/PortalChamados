(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./Client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./Client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./Client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./Client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./Client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./Client/app/components/login/login.component.ts");
/* harmony import */ var _components_chamado_chamados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chamado/chamados.component */ "./Client/app/components/chamado/chamados.component.ts");





var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'chamados', component: _components_chamado_chamados_component__WEBPACK_IMPORTED_MODULE_4__["ChamadosComponent"] },
    { path: '**', redirectTo: 'login' } /*,
    { path: 'register', component: RegisterComponent }*/
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./Client/app/app.component.html":
/*!***************************************!*\
  !*** ./Client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <header class=\"row row-without-padding bg-dark\">\r\n        <nav class=\"navbar navbar-dark\">\r\n            <div class=\"col-md-3 col-lg-2 col-without-padding\">\r\n\r\n            </div>\r\n            <div class=\"col col-without-padding\">\r\n                <div class=\"row row-without-padding\">\r\n                    <button class=\"navbar-toggler col-1 col-without-padding align-self-end\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\">\r\n                        <span class=\"navbar-toggler-icon\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n\r\n    <section class=\"row row-without-padding\">\r\n        <!--\r\n        <div id=\"loading\">\r\n            <div id=\"loading-text\"><span class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></span></div>\r\n        </div>\r\n        -->\r\n        <div class=\"col-md-3 col-lg-2 col-without-padding bg-dark\" *ngIf=\"!isMenuHidden\" style=\"margin-bottom:0px\">\r\n            <div class=\"row row-without-padding\">\r\n                <div class=\"col-1\">\r\n                    <span class=\"text-white\">ico</span>\r\n                </div>\r\n                <div class=\"col\" [ngbCollapse]=\"isMenuCollapsed\">\r\n                    <span class=\"text-white\">Toggleable via the navbar brand.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-without-padding\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./Client/app/app.component.ts":
/*!*************************************!*\
  !*** ./Client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isMenuHidden = false;
        this.isMenuCollapsed = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./Client/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./Client/app/app.module.ts":
/*!**********************************!*\
  !*** ./Client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./Client/app/app.component.ts");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "./Client/app/components/usuario/usuario.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./Client/app/components/login/login.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _components_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authentication/auth.guard */ "./Client/app/components/authentication/auth.guard.ts");
/* harmony import */ var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/api.interceptor */ "./Client/app/interceptors/api.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./Client/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./Client/app/app-routing.module.ts");
/* harmony import */ var _components_chamado_configurations_chamado_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chamado/configurations/chamado.module */ "./Client/app/components/chamado/configurations/chamado.module.ts");
/* harmony import */ var _components_servico_configurations_servico_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/servico/configurations/servico.module */ "./Client/app/components/servico/configurations/servico.module.ts");
/* harmony import */ var _components_entidadeSimples_configurations_entidadeSimples_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/entidadeSimples/configurations/entidadeSimples.module */ "./Client/app/components/entidadeSimples/configurations/entidadeSimples.module.ts");
/* harmony import */ var _components_grupoServico_configurations_grupoServico_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/grupoServico/configurations/grupoServico.module */ "./Client/app/components/grupoServico/configurations/grupoServico.module.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__["UsuarioComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _components_chamado_configurations_chamado_module__WEBPACK_IMPORTED_MODULE_14__["ChamadoModule"],
                _components_servico_configurations_servico_module__WEBPACK_IMPORTED_MODULE_15__["ServicoModule"],
                _components_grupoServico_configurations_grupoServico_module__WEBPACK_IMPORTED_MODULE_17__["GrupoServicoModule"],
                _components_entidadeSimples_configurations_entidadeSimples_module__WEBPACK_IMPORTED_MODULE_16__["EntidadeSimplesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _components_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
                { provide: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_11__["BASE_API_URL"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].BaseApiUrl },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_11__["ApiInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./Client/app/components/authentication/auth.guard.ts":
/*!************************************************************!*\
  !*** ./Client/app/components/authentication/auth.guard.ts ***!
  \************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('usuarioLogado'))
            return true;
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./Client/app/components/chamado/chamado.component.html":
/*!**************************************************************!*\
  !*** ./Client/app/components/chamado/chamado.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col-11\">\r\n                    <h4>Novo Chamado</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"formChamado\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"Departamento\">Departamento: </label>\r\n                        <select class=\"form-control\" name=\"Departamento\" id=\"Departamento\" formControlName=\"Departamento\">\r\n                            <option value=\"\" selected>Selecione...</option>\r\n                            <option *ngFor=\"let departamento of departamentos\">{{ departamento.Sigla }}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"Status\">Situação: </label>\r\n                        <select class=\"form-control\" name=\"Unidade\" id=\"Unidade\" formControlName=\"Unidade\">\r\n                            <option value=\"\" selected>Selecione...</option>\r\n                            <option *ngFor=\"let s of status\">\r\n                                {{ s.Nome }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"Inicio\">De: </label>\r\n                        <div class=\"input-group\">\r\n                            <input id=\"Inicio\" name=\"Inicio\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Inicio\" ngbDatepicker #de=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary fa fa-calendar\" (click)=\"de.toggle()\" type=\"button\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"Fim\">Até: </label>\r\n                        <div class=\"input-group\">\r\n                            <input id=\"Fim\" name=\"Fim\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Fim\" ngbDatepicker #ate=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary fa fa-calendar\" (click)=\"ate.toggle()\" type=\"button\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"Solucionador\">Solucionador: </label>\r\n                        <input type=\"text\" name=\"Solucionador\" class=\"form-control\" id=\"Solucionador\" formControlName=\"Solucionador\" />\r\n                    </div>\r\n                    <div class=\"form-group col\">\r\n                        <label for=\"AbertoPor\">Aberto Por: </label>\r\n                        <input type=\"text\" name=\"AbertoPor\" class=\"form-control\" id=\"AbertoPor\" formControlName=\"AbertoPor\" />\r\n                    </div>\r\n                    \r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col\">\r\n                    <button class=\"btn btn-warning\" (click)=\"limpar()\" type=\"reset\"><span class=\"font-weight-bold\">Limpar</span> <span class=\"fa fa-broom px-2\"></span></button>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <button class=\"btn btn-danger\" (click)=\"voltar()\" type=\"button\"><span class=\"font-weight-bold\">Voltar</span> <span class=\"fa fa-arrow-left px-2\"></span></button>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <button class=\"btn btn-success\" (click)=\"onSubmit()\" type=\"submit\"><span class=\"font-weight-bold\">Salvar</span> <span class=\"fa fa-file px-2\"></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./Client/app/components/chamado/chamado.component.ts":
/*!************************************************************!*\
  !*** ./Client/app/components/chamado/chamado.component.ts ***!
  \************************************************************/
/*! exports provided: ChamadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoComponent", function() { return ChamadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");




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
        this.formChamado = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Fim: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            AbertoPor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Solucionador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
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
    ChamadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./chamado.component.html */ "./Client/app/components/chamado/chamado.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ChamadoComponent);
    return ChamadoComponent;
}());



/***/ }),

/***/ "./Client/app/components/chamado/chamados.component.html":
/*!***************************************************************!*\
  !*** ./Client/app/components/chamado/chamados.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card [titulo]=\"'Filtros'\" [isCollapsed]=\"isFiltroCollapsed\">\r\n    <div card-body>\r\n        <form [formGroup]=\"formFiltros\" (ngSubmit)=\"buscarChamados()\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Departamento\">Departamento: </label>\r\n                    <select class=\"form-control\" name=\"Departamento\" id=\"Departamento\" formControlName=\"Departamento\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let departamento of departamentos\" value=\"{{departamento.Id}}\">{{ departamento.Sigla }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Status\">Situação: </label>\r\n                    <select class=\"form-control\" name=\"Status\" id=\"Status\" formControlName=\"Status\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let s of status\" value=\"{{s.Id}}\">\r\n                            {{ s.Nome }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Solucionador\">Solucionador: </label>\r\n                    <input type=\"text\" name=\"Solucionador\" class=\"form-control\" id=\"Solucionador\" formControlName=\"Solucionador\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Inicio\">De: </label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"Inicio\" name=\"Inicio\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Inicio\" ngbDatepicker #de=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary fa fa-calendar\" (click)=\"de.toggle()\" type=\"button\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Fim\">Até: </label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"Fim\" name=\"Fim\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Fim\" ngbDatepicker #ate=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary fa fa-calendar\" (click)=\"ate.toggle()\" type=\"button\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Solicitante\">Aberto Por: </label>\r\n                    <input type=\"text\" name=\"Solicitante\" class=\"form-control\" id=\"Solicitante\" formControlName=\"Solicitante\" />\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row justify-content-around\">\r\n                <div class=\"col-md-3 col-sm-4\"><button class=\"btn btn-block btn-warning\" (click)=\"limpar()\" type=\"reset\"><span class=\"font-weight-bold\">Limpar</span> <span class=\"fa fa-ban px-2\"></span></button></div>\r\n                <div class=\"col-md-3 col-sm-4\"><button class=\"btn btn-block btn-primary\" type=\"submit\"><span class=\"font-weight-bold\">Buscar</span> <span class=\"fa fa-search px-2\"></span></button></div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</card>\r\n\r\n<card [titulo]=\"'Lista de Chamados'\">\r\n    <div card-body>\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col text-center\" *ngIf=\"chamados?.length <= 0\">\r\n                <span><i>Não existem chamados com os filtros informados !</i></span>\r\n            </div>\r\n\r\n            <div class=\"col-12\" *ngIf=\"chamados?.length > 0\">\r\n                <table class=\"table table-condensed table-hover table-striped table-responsive internal-tables\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th [hidden]=\"!gerenciandoChamados\"></th>\r\n                            <th>#</th>\r\n                            <th>Data Abertura</th>\r\n                            <th>Serviço</th>\r\n                            <th>Descrição</th>\r\n                            <th>Solicitante</th>\r\n                            <th>Situação</th>\r\n                            <!--<th>Deadline</th>-->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let chamado of chamados\">\r\n                            <td [hidden]=\"!gerenciandoChamados\">\r\n                                <!--|| chamado.Servico.Grupo.Departamento.Id != usuarioLogado.Departamento.Id-->\r\n                                <input type=\"checkbox\" id=\"chamado-{{chamado.Id}}\" name=\"chamado-{{chamado.Id}}\" class=\"form-control\" (click)=\"onChangeChamados($event)\" />\r\n                            </td>\r\n                            <td> {{ chamado.Id }} </td>\r\n                            <td> {{ chamado.DataSolicitacao | date : 'dd/MM/yyyy' }} </td>\r\n                            <td> {{ chamado.Servico.Nome }} </td>\r\n                            <td> {{ chamado.Descricao }}</td>\r\n                            <td> {{ chamado.Solicitante.Login }} </td>\r\n\r\n                            <!--\r\n                            <td> {{ chamado.Status.Nome }} </td>\r\n                            <td> {{ chamado.Deadline | date : 'dd/MM/yyyy' }} </td>\r\n                            -->\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div card-footer>\r\n        <div class=\"row justify-content-around\">\r\n            <div class=\"col-md-6 col-sm-8\" [hidden]=\"gerenciandoChamados\">\r\n                <button type=\"button\" class=\"btn btn-md btn-block btn-secondary font-weight-bold\" (click)=\"gerenciandoChamados = true\">\r\n                    <span class=\"font-weight-bold\">Gerenciar Chamados</span> <span class=\"fa fa-check-square px-2\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-md-5 col-sm-6\" [hidden]=\"!gerenciandoChamados\">\r\n                <button type=\"button\" class=\"btn btn-md btn-block btn-success font-weight-bold\" (click)=\"abrirModal(modal)\">\r\n                    <span class=\"font-weight-bold\">Selecionar Solucionador</span> <span class=\"fa fa-tasks px-2\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-sm-3\" [hidden]=\"!gerenciandoChamados\">\r\n                <button type=\"button\" class=\"btn btn-md btn-block btn-danger font-weight-bold\" (click)=\"gerenciandoChamados = false\">\r\n                    <span class=\"font-weight-bold\">Cancelar</span> <span class=\"fa fa-ban px-2\"></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <button type=\"button\" class=\"btn btn-md btn-block btn-primary font-weight-bold\" routerLink=\"/chamado/novo\">\r\n                    <span class=\"font-weight-bold\">Novo</span> <span class=\"fa fa-plus-square px-2\"></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</card>\r\n\r\n<ng-template #modal let-modal>\r\n    <div class=\"modal-header main-color\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Atribuir Solucionador</h4>\r\n        <button type=\"button\" class=\"close main-color\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n            <span class=\"fa fa-times\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"formChamados\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Solucionador\">Solucionador</label>\r\n                        <select class=\"form-control\" name=\"Solucionador\" id=\"Solucionador\" formControlName=\"Solucionador\">\r\n                            <option value=\"\" selected>Selecione...</option>\r\n                            <option *ngFor=\"let solucionador of usuarios\" value=\"{{solucionador.Id}}\">\r\n                                {{ solucionador.Login }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p *ngIf=\"solucionador\"><b>Deseja realmente atribuir o Usuário {{ solucionador.Login }} como Solucionador dos chamados selecionados ?</b></p>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"modal.dismiss()\"><span class=\"font-weight-bold\">Cancelar</span> <span class=\"fa fa-times px-2\"></span></button>\r\n            </div>\r\n            <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-block btn-success\" [disabled]=\"formSolucionador.invalid\" (click)=\"setarSolucionador()\"><span class=\"font-weight-bold\">Confirmar</span> <span class=\"fa fa-save px-2\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./Client/app/components/chamado/chamados.component.ts":
/*!*************************************************************!*\
  !*** ./Client/app/components/chamado/chamados.component.ts ***!
  \*************************************************************/
/*! exports provided: ChamadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadosComponent", function() { return ChamadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





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
        this.formFiltros = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Situacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Fim: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Solicitante: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Solucionador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.formChamados = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Chamados: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Solucionador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
    ChamadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./chamados.component.html */ "./Client/app/components/chamado/chamados.component.html"), providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ChamadosComponent);
    return ChamadosComponent;
}());



/***/ }),

/***/ "./Client/app/components/chamado/configurations/chamado.module.ts":
/*!************************************************************************!*\
  !*** ./Client/app/components/chamado/configurations/chamado.module.ts ***!
  \************************************************************************/
/*! exports provided: ChamadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoModule", function() { return ChamadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chamado_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chamado.routing */ "./Client/app/components/chamado/configurations/chamado.routing.ts");
/* harmony import */ var _chamado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chamado.component */ "./Client/app/components/chamado/chamado.component.ts");
/* harmony import */ var _chamados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chamados.component */ "./Client/app/components/chamado/chamados.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/shared.module */ "./Client/app/shared/components/shared.module.ts");










var ChamadoModule = /** @class */ (function () {
    function ChamadoModule() {
    }
    ChamadoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _chamado_component__WEBPACK_IMPORTED_MODULE_4__["ChamadoComponent"],
                _chamados_component__WEBPACK_IMPORTED_MODULE_5__["ChamadosComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _chamado_routing__WEBPACK_IMPORTED_MODULE_3__["ChamadosRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]]
        })
    ], ChamadoModule);
    return ChamadoModule;
}());



/***/ }),

/***/ "./Client/app/components/chamado/configurations/chamado.routing.ts":
/*!*************************************************************************!*\
  !*** ./Client/app/components/chamado/configurations/chamado.routing.ts ***!
  \*************************************************************************/
/*! exports provided: ChamadosRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadosRouting", function() { return ChamadosRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.guard */ "./Client/app/components/authentication/auth.guard.ts");
/* harmony import */ var _chamados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chamados.component */ "./Client/app/components/chamado/chamados.component.ts");
/* harmony import */ var _chamado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chamado.component */ "./Client/app/components/chamado/chamado.component.ts");






var routes = [
    {
        path: 'chamados', component: _chamados_component__WEBPACK_IMPORTED_MODULE_4__["ChamadosComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'chamado/novo', component: _chamado_component__WEBPACK_IMPORTED_MODULE_5__["ChamadoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'chamado/visualizar', component: _chamado_component__WEBPACK_IMPORTED_MODULE_5__["ChamadoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'chamado/editar', component: _chamado_component__WEBPACK_IMPORTED_MODULE_5__["ChamadoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var ChamadosRouting = /** @class */ (function () {
    function ChamadosRouting() {
    }
    ChamadosRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ChamadosRouting);
    return ChamadosRouting;
}());



/***/ }),

/***/ "./Client/app/components/entidadeSimples/configurations/entidadeSimples.module.ts":
/*!****************************************************************************************!*\
  !*** ./Client/app/components/entidadeSimples/configurations/entidadeSimples.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EntidadeSimplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntidadeSimplesModule", function() { return EntidadeSimplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/shared.module */ "./Client/app/shared/components/shared.module.ts");
/* harmony import */ var _entidadeSimples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entidadeSimples.component */ "./Client/app/components/entidadeSimples/entidadeSimples.component.ts");
/* harmony import */ var _entidadeSimples_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entidadeSimples.routing */ "./Client/app/components/entidadeSimples/configurations/entidadeSimples.routing.ts");









var EntidadeSimplesModule = /** @class */ (function () {
    function EntidadeSimplesModule() {
    }
    EntidadeSimplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _entidadeSimples_component__WEBPACK_IMPORTED_MODULE_7__["EntidadeSimplesComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _entidadeSimples_routing__WEBPACK_IMPORTED_MODULE_8__["EntidadeSimplesRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]]
        })
    ], EntidadeSimplesModule);
    return EntidadeSimplesModule;
}());



/***/ }),

/***/ "./Client/app/components/entidadeSimples/configurations/entidadeSimples.routing.ts":
/*!*****************************************************************************************!*\
  !*** ./Client/app/components/entidadeSimples/configurations/entidadeSimples.routing.ts ***!
  \*****************************************************************************************/
/*! exports provided: EntidadeSimplesRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntidadeSimplesRouting", function() { return EntidadeSimplesRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.guard */ "./Client/app/components/authentication/auth.guard.ts");
/* harmony import */ var _entidadeSimples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entidadeSimples.component */ "./Client/app/components/entidadeSimples/entidadeSimples.component.ts");





var routes = [
    {
        path: 'tipoServico', component: _entidadeSimples_component__WEBPACK_IMPORTED_MODULE_4__["EntidadeSimplesComponent"], data: { titulo: 'Tipos de Serviço', endPoint: 'TipoServico' },
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var EntidadeSimplesRouting = /** @class */ (function () {
    function EntidadeSimplesRouting() {
    }
    EntidadeSimplesRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], EntidadeSimplesRouting);
    return EntidadeSimplesRouting;
}());



/***/ }),

/***/ "./Client/app/components/entidadeSimples/entidadeSimples.component.html":
/*!******************************************************************************!*\
  !*** ./Client/app/components/entidadeSimples/entidadeSimples.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card [titulo]=\"titulo\">\r\n    <div card-body>\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col text-center\" *ngIf=\"entidades?.length <= 0\">\r\n                <span><i>Não existem {{titulo}} cadastrados !</i></span>\r\n            </div>\r\n            <div class=\"col-12\" *ngIf=\"chamados?.length > 0\">\r\n                <table class=\"table table-condensed table-hover table-striped table-responsive internal-tables\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Nome</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entidade of entidades\">\r\n                            <td (click)=\"abrirModal(modal, entidade)\"> {{ entidade.Nome }} </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div card-footer>\r\n        <div class=\"row justify-content-around\">\r\n            <div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-md btn-block btn-primary font-weight-bold\" (click)=\"abrirModal(modal, null)\" >Novo</button></div>\r\n        </div>\r\n    </div>\r\n</card>\r\n\r\n<ng-template #modal let-modal>\r\n    <form [formGroup]=\"formEntidade\" (ngSubmit)=\"salvar()\">\r\n        <div class=\"modal-header main-color\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Novo {{titulo}}</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n                <span class=\"fa fa-times\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Nome\">Nome :</label>\r\n                        <input type=\"text\" name=\"Nome\" class=\"form-control\" id=\"Nome\" formControlName=\"Nome\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"modal.dismiss()\"><span class=\"font-weight-bold\">Cancelar</span> <span class=\"fa fa-times px-2\"></span></button>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <button type=\"submit\" class=\"btn btn-block btn-success\" [disabled]=\"formEntidade.invalid\"><span class=\"font-weight-bold\">Confirmar</span> <span class=\"fa fa-save px-2\"></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./Client/app/components/entidadeSimples/entidadeSimples.component.ts":
/*!****************************************************************************!*\
  !*** ./Client/app/components/entidadeSimples/entidadeSimples.component.ts ***!
  \****************************************************************************/
/*! exports provided: EntidadeSimplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntidadeSimplesComponent", function() { return EntidadeSimplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






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
        this.formEntidade = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
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
    EntidadeSimplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./entidadeSimples.component.html */ "./Client/app/components/entidadeSimples/entidadeSimples.component.html"), providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EntidadeSimplesComponent);
    return EntidadeSimplesComponent;
}());



/***/ }),

/***/ "./Client/app/components/grupoServico/configurations/grupoServico.module.ts":
/*!**********************************************************************************!*\
  !*** ./Client/app/components/grupoServico/configurations/grupoServico.module.ts ***!
  \**********************************************************************************/
/*! exports provided: GrupoServicoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoServicoModule", function() { return GrupoServicoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grupoServico_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupoServico.routing */ "./Client/app/components/grupoServico/configurations/grupoServico.routing.ts");
/* harmony import */ var _gruposServico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gruposServico.component */ "./Client/app/components/grupoServico/gruposServico.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/shared.module */ "./Client/app/shared/components/shared.module.ts");









var GrupoServicoModule = /** @class */ (function () {
    function GrupoServicoModule() {
    }
    GrupoServicoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _gruposServico_component__WEBPACK_IMPORTED_MODULE_4__["GruposServicoComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _grupoServico_routing__WEBPACK_IMPORTED_MODULE_3__["GrupoServicoRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]]
        })
    ], GrupoServicoModule);
    return GrupoServicoModule;
}());



/***/ }),

/***/ "./Client/app/components/grupoServico/configurations/grupoServico.routing.ts":
/*!***********************************************************************************!*\
  !*** ./Client/app/components/grupoServico/configurations/grupoServico.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: GrupoServicoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoServicoRouting", function() { return GrupoServicoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.guard */ "./Client/app/components/authentication/auth.guard.ts");
/* harmony import */ var _gruposServico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gruposServico.component */ "./Client/app/components/grupoServico/gruposServico.component.ts");





var routes = [
    {
        path: 'gruposServico', component: _gruposServico_component__WEBPACK_IMPORTED_MODULE_4__["GruposServicoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var GrupoServicoRouting = /** @class */ (function () {
    function GrupoServicoRouting() {
    }
    GrupoServicoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], GrupoServicoRouting);
    return GrupoServicoRouting;
}());



/***/ }),

/***/ "./Client/app/components/grupoServico/gruposServico.component.html":
/*!*************************************************************************!*\
  !*** ./Client/app/components/grupoServico/gruposServico.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card [titulo]=\"'Listagem de Grupos de Serviço'\">\r\n    <div card-body>\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-12\">\r\n                <table class=\"table table-condensed table-hover table-striped table-responsive internal-tables\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Nome</th>\r\n                            <th>Descrição</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let grupo of grupos\" (click)=\"abrirModal(modal, grupo)\">\r\n                            <td> {{ grupo.Nome }} </td>\r\n                            <td> {{ grupo.Descricao }} </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div card-footer>\r\n        <div class=\"row justify-content-around\">\r\n            <div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-md btn-block btn-primary font-weight-bold\" (click)=\"abrirModal(modal, null)\">Novo</button></div>\r\n        </div>\r\n    </div>\r\n</card>\r\n\r\n<ng-template #modal let-modal>\r\n    <div class=\"modal-header main-color\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Novo Grupo de Serviço</h4>\r\n        <button type=\"button\" class=\"close main-color\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n            <span class=\"fa fa-times\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"formGrupoServico\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Nome\">Nome :</label>\r\n                        <input type=\"text\" name=\"Nome\" class=\"form-control\" id=\"Nome\" formControlName=\"Nome\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"Descricao\">Descrição: </label>\r\n                    <textarea class=\"form-control\" id=\"Descricao\" name=\"Descricao\" formControlName=\"Descricao\" maxlength=\"500\" rows=\"5\"></textarea>\r\n                    <label>{{500 - formGrupoServico.controls.Descricao.value?.length}} de 500 caracteres.</label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"modal.dismiss()\"><span class=\"font-weight-bold\">Cancelar</span> <span class=\"fa fa-times px-2\"></span></button>\r\n            </div>\r\n            <div class=\"col\">\r\n                <button type=\"submit\" class=\"btn btn-block btn-success\" [disabled]=\"formGrupoServico.invalid\"><span class=\"font-weight-bold\">Confirmar</span> <span class=\"fa fa-save px-2\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./Client/app/components/grupoServico/gruposServico.component.ts":
/*!***********************************************************************!*\
  !*** ./Client/app/components/grupoServico/gruposServico.component.ts ***!
  \***********************************************************************/
/*! exports provided: GruposServicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposServicoComponent", function() { return GruposServicoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






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
        this.formGrupoServico = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)),
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
    GruposServicoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./gruposServico.component.html */ "./Client/app/components/grupoServico/gruposServico.component.html"), providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], GruposServicoComponent);
    return GruposServicoComponent;
}());



/***/ }),

/***/ "./Client/app/components/login/login.component.html":
/*!**********************************************************!*\
  !*** ./Client/app/components/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col login-box\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <img src=\"img/book.png\" height=\"160\" />\r\n        </div>\r\n    </div>\r\n\r\n    <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n            <span class=\"fa fa-envelope col-xs-auto input-fa\"></span>\r\n            <input type=\"text\" class=\"col form-control\" id=\"Login\" name=\"Login\" formControlName=\"Login\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"fa fa-lock col-xs-auto input-fa\"></span>\r\n            <input type=\"password\" class=\"col form-control\" id=\"Senha\" name=\"Senha\" formControlName=\"Senha\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <button type=\"submit\" id=\"Logar\" class=\"btn btn-primary btn-block btn-flat\">ENTRAR</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <a class=\"col\" href=\"#\">Esqueci o e-mail ou senha</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./Client/app/components/login/login.component.ts":
/*!********************************************************!*\
  !*** ./Client/app/components/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _viewModels_usuarioViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../viewModels/usuarioViewModel */ "./Client/app/viewModels/usuarioViewModel.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'chamados';
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Login: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (usuarioLogado && usuarioLogado.Token) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            this.router.navigate(['chamados']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var usuario = new _viewModels_usuarioViewModel__WEBPACK_IMPORTED_MODULE_5__["UsuarioViewModel"](this.formLogin.value);
        this.api.post('api/Usuario/Autenticar', usuario, function (result) {
            localStorage.setItem('usuarioLogado', JSON.stringify(result));
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./Client/app/components/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./Client/app/components/servico/configurations/servico.module.ts":
/*!************************************************************************!*\
  !*** ./Client/app/components/servico/configurations/servico.module.ts ***!
  \************************************************************************/
/*! exports provided: ServicoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoModule", function() { return ServicoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servico_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servico.routing */ "./Client/app/components/servico/configurations/servico.routing.ts");
/* harmony import */ var _servico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servico.component */ "./Client/app/components/servico/servico.component.ts");
/* harmony import */ var _servicos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicos.component */ "./Client/app/components/servico/servicos.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/shared.module */ "./Client/app/shared/components/shared.module.ts");










var ServicoModule = /** @class */ (function () {
    function ServicoModule() {
    }
    ServicoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _servico_component__WEBPACK_IMPORTED_MODULE_4__["ServicoComponent"],
                _servicos_component__WEBPACK_IMPORTED_MODULE_5__["ServicosComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _servico_routing__WEBPACK_IMPORTED_MODULE_3__["ServicosRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]]
        })
    ], ServicoModule);
    return ServicoModule;
}());



/***/ }),

/***/ "./Client/app/components/servico/configurations/servico.routing.ts":
/*!*************************************************************************!*\
  !*** ./Client/app/components/servico/configurations/servico.routing.ts ***!
  \*************************************************************************/
/*! exports provided: ServicosRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosRouting", function() { return ServicosRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.guard */ "./Client/app/components/authentication/auth.guard.ts");
/* harmony import */ var _servicos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicos.component */ "./Client/app/components/servico/servicos.component.ts");
/* harmony import */ var _servico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servico.component */ "./Client/app/components/servico/servico.component.ts");






var routes = [
    {
        path: 'servicos', component: _servicos_component__WEBPACK_IMPORTED_MODULE_4__["ServicosComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'servico/novo', component: _servico_component__WEBPACK_IMPORTED_MODULE_5__["ServicoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'servico/visualizar/:id', component: _servico_component__WEBPACK_IMPORTED_MODULE_5__["ServicoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'servico/editar/:id', component: _servico_component__WEBPACK_IMPORTED_MODULE_5__["ServicoComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var ServicosRouting = /** @class */ (function () {
    function ServicosRouting() {
    }
    ServicosRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ServicosRouting);
    return ServicosRouting;
}());



/***/ }),

/***/ "./Client/app/components/servico/servico.component.html":
/*!**************************************************************!*\
  !*** ./Client/app/components/servico/servico.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card [titulo]=\"'Novo'\">\r\n    <div card-body>\r\n        <form [formGroup]=\"formServico\" ngSubmit=\"salvar()\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Nome\">Nome: </label>\r\n                    <input type=\"text\" name=\"Nome\" class=\"form-control\" id=\"Nome\" formControlName=\"Nome\" />\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"GrupoServico\">Grupo de Serviço: </label>\r\n                    <select class=\"form-control\" name=\"GrupoServico\" id=\"GrupoServico\" formControlName=\"GrupoServico\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let grupo of grupos\" value=\"{{grupo.Id}}\">{{ grupo.Nome }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"TipoServico\">Tipo de Serviço: </label>\r\n                    <select class=\"form-control\" name=\"TipoServico\" id=\"TipoServico\" formControlName=\"TipoServico\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let tipo of tipos\" value=\"{{tipo.Id}}\">{{ tipo.Nome }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Prazo\">Prazo: </label>\r\n                    <input type=\"number\" name=\"Prazo\" class=\"form-control\" id=\"Prazo\" formControlName=\"Prazo\" (keypress)=\"apenasInteirosPositivos($event)\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"Procedimento\">Procedimento: </label>\r\n                    <textarea class=\"form-control\" id=\"Procedimento\" name=\"Procedimento\" formControlName=\"Procedimento\" maxlength=\"500\" rows=\"5\"></textarea>\r\n                    <label>{{500 - formServico.controls.Procedimento.value?.length}} de 500 caracteres.</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"Descricao\">Descrição: </label>\r\n                    <textarea class=\"form-control\" id=\"Descricao\" name=\"Descricao\" formControlName=\"Descricao\" maxlength=\"500\" rows=\"5\"></textarea>\r\n                    <label>{{500 - formServico.controls.Descricao.value?.length}} de 500 caracteres.</label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div card-footer>\r\n        <div class=\"row justify-content-around\">\r\n            <div class=\"form-group col-sm-3\">\r\n                <button class=\"btn btn-block btn-danger\" (click)=\"voltar()\" type=\"button\"><span class=\"font-weight-bold\">Voltar</span> <span class=\"fa fa-arrow-left px-2\"></span></button>\r\n            </div>\r\n            <div class=\"form-group col-sm-3\">\r\n                <button class=\"btn btn-block btn-warning\" (click)=\"limpar()\" type=\"reset\"><span class=\"font-weight-bold\">Limpar</span> <span class=\"fa fa-ban px-2\"></span></button>\r\n            </div>\r\n            <div class=\"form-group col-sm-3\">\r\n                <button class=\"btn btn-block btn-success\" type=\"submit\"><span class=\"font-weight-bold\">Salvar</span> <span class=\"fa fa-save px-2\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</card>\r\n"

/***/ }),

/***/ "./Client/app/components/servico/servico.component.ts":
/*!************************************************************!*\
  !*** ./Client/app/components/servico/servico.component.ts ***!
  \************************************************************/
/*! exports provided: ServicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoComponent", function() { return ServicoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _shared_utils_funcoesGerais__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/funcoesGerais */ "./Client/app/shared/utils/funcoesGerais.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ServicoComponent = /** @class */ (function () {
    function ServicoComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    ServicoComponent.prototype.ngOnInit = function () {
        this.buscarGrupos();
        this.buscarTipos();
        this.formServico = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]),
            Descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)),
            Procedimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)),
            Prazo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            TipoServico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            GrupoServico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
        if (!_shared_utils_funcoesGerais__WEBPACK_IMPORTED_MODULE_4__["FuncoesGerais"].inteiroPositivo(event.key))
            event.preventDefault();
    };
    ServicoComponent.prototype.salvar = function () {
        var _this = this;
        this.api.post('api/Servico', this.formServico.value, function (result) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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
    ServicoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ providers: [_shared_utils_funcoesGerais__WEBPACK_IMPORTED_MODULE_4__["FuncoesGerais"]], template: __webpack_require__(/*! ./servico.component.html */ "./Client/app/components/servico/servico.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ServicoComponent);
    return ServicoComponent;
}());



/***/ }),

/***/ "./Client/app/components/servico/servicos.component.html":
/*!***************************************************************!*\
  !*** ./Client/app/components/servico/servicos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card [titulo]=\"'Filtros'\" [isCollapsed]=\"isFiltroCollapsed\">\r\n    <div card-body>\r\n        <form [formGroup]=\"formChamado\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Departamento\">Departamento: </label>\r\n                    <select class=\"form-control\" name=\"Departamento\" id=\"Departamento\" formControlName=\"Departamento\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let departamento of departamentos\">{{ departamento.Sigla }}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Unidade\">Unidade: </label>\r\n                    <select class=\"form-control\" name=\"Unidade\" id=\"Unidade\" formControlName=\"Unidade\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let unidade of unidades\">\r\n                            {{ unidade.Sigla }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Status\">Situação: </label>\r\n                    <select class=\"form-control\" name=\"Unidade\" id=\"Unidade\" formControlName=\"Unidade\">\r\n                        <option value=\"\" selected>Selecione...</option>\r\n                        <option *ngFor=\"let s of status\">\r\n                            {{ s.Nome }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Inicio\">De: </label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"Inicio\" name=\"Inicio\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Inicio\" ngbDatepicker #de=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary fa fa-calendar\" (click)=\"de.toggle()\" type=\"button\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Fim\">Até: </label>\r\n                    <div class=\"input-group\">\r\n                        <input id=\"Fim\" name=\"Fim\" type=\"text\" style=\"background-color:white\" class=\"form-control\" formControlName=\"Fim\" ngbDatepicker #ate=\"ngbDatepicker\" [displayMonths]=\"2\" [navigation]=\"'arrows'\" />\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-primary fa fa-calendar\" (click)=\"ate.toggle()\" type=\"button\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"Solucionador\">Solucionador: </label>\r\n                    <input type=\"text\" name=\"Solucionador\" class=\"form-control\" id=\"Solucionador\" formControlName=\"Solucionador\" />\r\n                </div>\r\n                <div class=\"form-group col-sm\">\r\n                    <label for=\"AbertoPor\">Aberto Por: </label>\r\n                    <input type=\"text\" name=\"AbertoPor\" class=\"form-control\" id=\"AbertoPor\" formControlName=\"AbertoPor\" />\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col\">\r\n                    <button class=\"btn btn-primary float-right\" (click)=\"onSubmit()\" type=\"submit\"><span class=\"font-weight-bold\">Buscar</span> <span class=\"fa fa-search px-2\"></span></button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</card>\r\n\r\n<card [titulo]=\"'Lista de Chamados'\">\r\n    <div card-body>\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-12\">\r\n                <table class=\"table table-condensed table-hover table-striped table-responsive internal-tables\">\r\n                    <thead>\r\n                        <tr>\r\n                            <!--<th [hidden]=\"!gerenciandoChamados\"></th>-->\r\n                            <th>#</th>\r\n                            <th>Data Abertura</th>\r\n                            <th>Descrição</th>\r\n                            <!--<th>Un. Solicitante</th>-->\r\n                            <th>Solicitante</th>\r\n                            <!--<th>Un. Solucionador</th>-->\r\n                            <th>Solucionador</th>\r\n                            <th>Situação</th>\r\n                            <!--<th>Deadline</th>-->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let chamado of chamados\">\r\n                            <!--<td [hidden]=\"!gerenciandoChamados || chamado.Servico.Grupo.Unidade.Id != usuarioLogado.Unidade.Id\">\r\n                                <input type=\"checkbox\" name=\"chamado-{{chamado.Id}}\" class=\"form-control\" id=\"chamado-{{chamado.Id}}\" formControlName=\"chamado-{{chamado.Id}}\" />\r\n                            </td>-->\r\n                            <td> {{ chamado.Id }} </td>\r\n                            <td> {{ chamado.DataSolicitacao | date : 'dd/MM/yyyy' }} </td>\r\n                            <td> {{ chamado.Descricao }}</td>\r\n                            <td> {{ chamado.Solicitante.Login }} </td>\r\n                            <td> {{ chamado.Solucionador.Login }} </td>\r\n                            <!--\r\n                            <td> {{ chamado.Status.Nome }} </td>\r\n                            <td> {{ chamado.Solicitante.Unidade.Sigla }} </td>\r\n                            <td> {{ chamado.Servico.Grupo.Unidade.Sigla }} </td>\r\n                            <td> {{ chamado.Deadline | date : 'dd/MM/yyyy' }} </td>\r\n                            -->\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div card-footer>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm\" [hidden]=\"gerenciandoChamados\"><button type=\"button\" class=\"btn btn-md btn-block btn-primary font-weight-bold\" (click)=\"gerenciandoChamados = true\">Gerenciar Chamados</button></div>\r\n            <div class=\"col-sm\" [hidden]=\"!gerenciandoChamados\"><button type=\"button\" class=\"btn btn-md btn-block btn-success font-weight-bold\" data-toggle=\"modal\" data-target=\"#SolverModal\" data-backdrop=\"static\">Confirmar</button></div>\r\n            <div class=\"col-sm\" [hidden]=\"!gerenciandoChamados\"><button type=\"button\" class=\"btn btn-md btn-block btn-danger font-weight-bold\" (click)=\"gerenciandoChamados = false\">Cancelar</button></div>\r\n            <div class=\"col-sm\"><button type=\"button\" class=\"btn btn-md btn-block btn-outline-danger\"><span class=\"font-weight-bold\">PDF</span><span class=\"fa fa-file-pdf px-2\"></span></button></div>\r\n            <div class=\"col-sm\"> <button type=\"button\" class=\"btn btn-md btn-block btn-outline-success\"><span class=\"font-weight-bold\">Excel</span><span class=\"fa fa-file-excel px-2\"></span></button></div>\r\n        </div>\r\n    </div>\r\n</card>\r\n\r\n<ng-template #modal let-modal>\r\n    <div class=\"modal-header main-color\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Atribuir Solucionador</h4>\r\n        <button type=\"button\" class=\"close main-color\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n            <span class=\"fa fa-times\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"formSolucionador\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Solucionador\">Solucionador</label>\r\n                        <select class=\"form-control\" name=\"Solucionador\" id=\"Solucionador\" formControlName=\"Solucionador\">\r\n                            <option value=\"\" selected>Selecione...</option>\r\n                            <option *ngFor=\"let solucionador of usuarios\">\r\n                                {{ solucionador.Login }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p *ngIf=\"solucionador\"><b>Deseja realmente atribuir o Usuário {{ solucionador.Login }} como Solucionador dos chamados selecionados ?</b></p>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" (click)=\"modal.dismiss()\"><span class=\"font-weight-bold\">Cancelar</span> <span class=\"fa fa-times px-2\"></span></button>\r\n            </div>\r\n            <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-block btn-success\" [disabled]=\"formSolucionador.invalid\" (click)=\"setarSolucionador()\"><span class=\"font-weight-bold\">Confirmar</span> <span class=\"fa fa-save px-2\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"abrirModal(modal)\">Launch demo modal</button>\r\n"

/***/ }),

/***/ "./Client/app/components/servico/servicos.component.ts":
/*!*************************************************************!*\
  !*** ./Client/app/components/servico/servicos.component.ts ***!
  \*************************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





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
        this.formServico = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Fim: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            AbertoPor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Solucionador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.formSolucionador = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Solucionador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
    ServicosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./servicos.component.html */ "./Client/app/components/servico/servicos.component.html"), providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ServicosComponent);
    return ServicosComponent;
}());



/***/ }),

/***/ "./Client/app/components/usuario/usuario.component.html":
/*!**************************************************************!*\
  !*** ./Client/app/components/usuario/usuario.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div class=\"box-header with-border\" style=\"padding: 10px !important;\">\r\n    <h3 class=\"box-title\"><b>{{titulo}}</b></h3>\r\n    <div class=\"box-tools pull-right\">\r\n      <a class=\"btn btn-sm btn-flat btn-primary\"><span class=\"fa fa-plus\"></span></a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box-body\">\r\n    <div class=\"row\">\r\n      <div class=\"table-responsive col-sm-12\">\r\n        <table class=\"table table-condensed table-hover table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"text-align:center\">Login</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let entidade of entidades\">\r\n              <td>{{ entidade.Login }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./Client/app/components/usuario/usuario.component.ts":
/*!************************************************************!*\
  !*** ./Client/app/components/usuario/usuario.component.ts ***!
  \************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");



var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(api) {
        this.api = api;
        this.titulo = 'Usuário';
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.buscarUsuarios();
    };
    UsuarioComponent.prototype.buscarUsuarios = function () {
        var _this = this;
        this.api.get('api/Usuario', function (result) {
            _this.entidades = result;
        });
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./Client/app/components/usuario/usuario.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./Client/app/interceptors/api.interceptor.ts":
/*!****************************************************!*\
  !*** ./Client/app/interceptors/api.interceptor.ts ***!
  \****************************************************/
/*! exports provided: BASE_API_URL, ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API_URL", function() { return BASE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BASE_API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('baseApiUrl');
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(apiUrl) {
        this.apiUrl = apiUrl;
        this.requisitions = 0;
    }
    ApiInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.requisitions == 0)
            //this.spinner.show();
            this.requisitions++;
        var url = request.url.split('/');
        if (url[2] != 'viacep.com.br') {
            request = request.clone({ url: this.prepareUrl(request.url) });
            var currentUser = JSON.parse(localStorage.getItem('usuarioLogado'));
            if (currentUser && currentUser.Token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + currentUser.Token
                    }
                });
            }
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
                localStorage.removeItem('usuarioLogado');
                location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.requisitions--;
            if (_this.requisitions == 0)
                console.log('this.spinner.hide()');
        }));
    };
    ApiInterceptor.prototype.isAbsoluteUrl = function (url) {
        var absolutePattern = /^https?:\/\//i;
        return absolutePattern.test(url);
    };
    ApiInterceptor.prototype.prepareUrl = function (url) {
        url = this.isAbsoluteUrl(url) || this.apiUrl === '/' ? url : this.apiUrl + '/' + url;
        return url.replace(/([^:]\/)\/+/g, '$1');
    };
    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(BASE_API_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./Client/app/services/api.service.ts":
/*!********************************************!*\
  !*** ./Client/app/services/api.service.ts ***!
  \********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T como parâmetro
     * @param url url a qual será realizada a operação
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.get = function (url, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        return this.http.get(url).subscribe(function (result) { return _this.checkReturn(result, callback); }, function (error) { return _this.alertError(error); });
    };
    /**
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T como parâmetro
     * @param url url a qual será realizada a operação
     * @param data dados a serem enviados
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.getWithFilter = function (url, data, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: data
        });
        this.http.request('get', url, { params: params }).subscribe(function (result) { return _this.checkReturn(result, callback); }, function (error) { return _this.alertError(error); });
    };
    /**
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T ou o Array de IApiResponse<T> como parâmetro
     * @param url url a qual será realizada a operação
     * @param data dados a serem enviados
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.post = function (url, data, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        return this.http.post(url, [data]).subscribe(function (result) { return _this.checkReturns(result, callback); }, function (error) { return _this.alertError(error); });
    };
    /**
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T ou o Array de IApiResponse<T> como parâmetro
     * @param url url a qual será realizada a operação
     * @param data dados a serem enviados
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.put = function (url, data, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        return this.http.put(url, [data]).subscribe(function (result) { return _this.checkReturns(result, callback); }, function (error) { return _this.alertError(error); });
    };
    /**
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T como parâmetro
     * @param url url a qual será realizada a operação
     * @param ids ids das entidades a serem excluídas
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.delete = function (url, ids, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        return this.http.request('delete', url, { body: ids }).subscribe(function (result) { return _this.checkReturn(result, callback); }, function (error) { return _this.alertError(error); });
    };
    /**
    * Verifica se a operação foi executada com sucesso e retorna a entidade ou então exibe uma mensagem com o erro.
    * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T como parâmetro
    * @param results Resultado
    * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
    */
    ApiService.prototype.checkReturn = function (result, callback) {
        if (callback === void 0) { callback = null; }
        if (result.IsSuccess) {
            if (callback)
                callback(result.Data);
            else
                return result.Data;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'error',
                title: 'Erro ao processar a sua requisição!',
                text: result.Messages.join(',')
            });
        }
    };
    /**
     * Verifica se a operação foi para uma entidade, em caso positivo chama checkResult, em caso negativo retorna um Array de IApiResponse<T> com as validações individuais de cada entidade
     * Obs: Caso seja passado um callback não existirá retorno, ao fim da requisição será chamada a função de callback passando a entidade T como parâmetro
     * @param results Array de resultados
     * @param callback Função a ser chamada após o retorno da requisição (Será passado o retorno como parâmetro)
     */
    ApiService.prototype.checkReturns = function (results, callback) {
        if (callback === void 0) { callback = null; }
        if (!Array.isArray(results))
            this.checkReturn(results, callback);
        else if (results.length == 1)
            this.checkReturn(results[0], callback);
        else {
            if (callback)
                callback(results);
            else
                return results;
        }
    };
    ApiService.prototype.alertError = function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            type: 'error',
            title: "Erro",
            text: "Ocorreu um erro ao processar a sua requisição!"
        });
        console.log(error);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./Client/app/shared/components/card/card.component.html":
/*!***************************************************************!*\
  !*** ./Client/app/shared/components/card/card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header main-color\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col\">\r\n                    <h4>{{titulo}}</h4>\r\n                </div>\r\n                <div class=\"col\" *ngIf=\"!(isCollapsed == null || isCollapsed == undefined)\">\r\n                    <button type=\"button\" class=\"btn btn-default float-right main-color\" (click)=\"isCollapsed = !isCollapsed\">\r\n                        <span *ngIf=\"isCollapsed\" class=\"fa fa-plus\"></span>\r\n                        <span *ngIf=\"!isCollapsed\" class=\"fa fa-minus\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" [ngbCollapse]=\"isCollapsed\">\r\n            <ng-content select=\"[card-body]\"></ng-content>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <ng-content select=\"[card-footer]\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./Client/app/shared/components/card/card.component.ts":
/*!*************************************************************!*\
  !*** ./Client/app/shared/components/card/card.component.ts ***!
  \*************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardComponent.prototype, "isCollapsed", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./Client/app/shared/components/card/card.component.html"),
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./Client/app/shared/components/shared.module.ts":
/*!*******************************************************!*\
  !*** ./Client/app/shared/components/shared.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "./Client/app/shared/components/card/card.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./Client/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ],
            exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./Client/app/shared/utils/funcoesGerais.ts":
/*!**************************************************!*\
  !*** ./Client/app/shared/utils/funcoesGerais.ts ***!
  \**************************************************/
/*! exports provided: FuncoesGerais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncoesGerais", function() { return FuncoesGerais; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

var FuncoesGerais = /** @class */ (function () {
    function FuncoesGerais() {
    }
    FuncoesGerais.inteiroPositivo = function (valor) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(valor))
            return valor.toPrecision(0).length > 0;
        else
            return valor.replace(/^\D+/g, '').length > 0;
    };
    FuncoesGerais.apenasInteirosPositivos = function (valor) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(valor))
            return valor.toPrecision(0);
        else
            return valor.replace(/^\D+/g, '');
    };
    return FuncoesGerais;
}());



/***/ }),

/***/ "./Client/app/viewModels/departamentoViewModel.ts":
/*!********************************************************!*\
  !*** ./Client/app/viewModels/departamentoViewModel.ts ***!
  \********************************************************/
/*! exports provided: DepartamentoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentoViewModel", function() { return DepartamentoViewModel; });
var DepartamentoViewModel = /** @class */ (function () {
    function DepartamentoViewModel(departamento) {
        if (!departamento) {
            return;
        }
        this.Id = departamento.Id;
        this.Nome = departamento.Nome;
        this.Sigla = departamento.Sigla;
    }
    return DepartamentoViewModel;
}());



/***/ }),

/***/ "./Client/app/viewModels/funcionalidadeViewModel.ts":
/*!**********************************************************!*\
  !*** ./Client/app/viewModels/funcionalidadeViewModel.ts ***!
  \**********************************************************/
/*! exports provided: FuncionalidadeViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionalidadeViewModel", function() { return FuncionalidadeViewModel; });
var FuncionalidadeViewModel = /** @class */ (function () {
    function FuncionalidadeViewModel(funcionalidade) {
        if (!funcionalidade) {
            return;
        }
        this.Id = funcionalidade.Id;
        this.Nome = funcionalidade.Nome;
        this.Salvar = funcionalidade.Salvar;
        this.Alterar = funcionalidade.Alterar;
        this.Deletar = funcionalidade.Deletar;
        this.Consultar = funcionalidade.Consultar;
    }
    return FuncionalidadeViewModel;
}());



/***/ }),

/***/ "./Client/app/viewModels/permissaoViewModel.ts":
/*!*****************************************************!*\
  !*** ./Client/app/viewModels/permissaoViewModel.ts ***!
  \*****************************************************/
/*! exports provided: PermissaoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissaoViewModel", function() { return PermissaoViewModel; });
/* harmony import */ var _funcionalidadeViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcionalidadeViewModel */ "./Client/app/viewModels/funcionalidadeViewModel.ts");

var PermissaoViewModel = /** @class */ (function () {
    function PermissaoViewModel(permissao) {
        if (!permissao) {
            return;
        }
        this.Id = permissao.Id;
        this.Nome = permissao.Nome;
        this.Descricao = permissao.Descricao;
        this.Funcionalidades = permissao.Funcionalidades ? permissao.Funcionalidades : [new _funcionalidadeViewModel__WEBPACK_IMPORTED_MODULE_0__["FuncionalidadeViewModel"](null)];
    }
    return PermissaoViewModel;
}());



/***/ }),

/***/ "./Client/app/viewModels/usuarioViewModel.ts":
/*!***************************************************!*\
  !*** ./Client/app/viewModels/usuarioViewModel.ts ***!
  \***************************************************/
/*! exports provided: UsuarioViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioViewModel", function() { return UsuarioViewModel; });
/* harmony import */ var _departamentoViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departamentoViewModel */ "./Client/app/viewModels/departamentoViewModel.ts");
/* harmony import */ var _permissaoViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissaoViewModel */ "./Client/app/viewModels/permissaoViewModel.ts");


var UsuarioViewModel = /** @class */ (function () {
    function UsuarioViewModel(usuario) {
        if (!usuario) {
            return;
        }
        this.Login = usuario.Login;
        this.Senha = usuario.Senha;
        this.Token = usuario.Token;
        this.Departamento = usuario.Departamento ? usuario.Departamento : new _departamentoViewModel__WEBPACK_IMPORTED_MODULE_0__["DepartamentoViewModel"](null);
        this.Permissoes = usuario.Permissoes ? usuario.Permissoes : [new _permissaoViewModel__WEBPACK_IMPORTED_MODULE_1__["PermissaoViewModel"](null)];
    }
    return UsuarioViewModel;
}());



/***/ }),

/***/ "./Client/environments/environment.ts":
/*!********************************************!*\
  !*** ./Client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    Production: false,
    BaseApiUrl: 'http://localhost:56040/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./Client/main.ts":
/*!************************!*\
  !*** ./Client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./Client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./Client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./Client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wfbsantos\source\repos\PortalChamados\PortalChamados\Client\main.ts */"./Client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map