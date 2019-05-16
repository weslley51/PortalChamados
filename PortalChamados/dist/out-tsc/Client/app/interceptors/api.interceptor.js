import * as tslib_1 from "tslib";
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
export var BASE_API_URL = new InjectionToken('baseApiUrl');
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
        return next.handle(request).pipe(catchError(function (error) {
            if (error.status === 401) {
                localStorage.removeItem('usuarioLogado');
                location.reload(true);
            }
            return throwError(error);
        }), finalize(function () {
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
    ApiInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(BASE_API_URL)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], ApiInterceptor);
    return ApiInterceptor;
}());
export { ApiInterceptor };
//# sourceMappingURL=api.interceptor.js.map