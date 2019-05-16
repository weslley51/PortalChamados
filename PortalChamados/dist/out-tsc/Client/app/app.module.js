import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService } from './services/api.service';
import { AuthGuard } from './components/authentication/auth.guard';
import { ApiInterceptor, BASE_API_URL } from './interceptors/api.interceptor';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ChamadoModule } from './components/chamado/configurations/chamado.module';
import { ServicoModule } from './components/servico/configurations/servico.module';
import { EntidadeSimplesModule } from './components/entidadeSimples/configurations/entidadeSimples.module';
import { GrupoServicoModule } from './components/grupoServico/configurations/grupoServico.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                UsuarioComponent
            ],
            imports: [
                NgbModule,
                NgbModule.forRoot(),
                ChamadoModule,
                ServicoModule,
                GrupoServicoModule,
                EntidadeSimplesModule,
                AppRoutingModule,
                BrowserModule,
                HttpClientModule,
                ReactiveFormsModule
            ],
            providers: [
                AuthGuard,
                ApiService,
                { provide: BASE_API_URL, useValue: environment.BaseApiUrl },
                { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map