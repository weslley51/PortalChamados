import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
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
        var params = new HttpParams({
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
            Swal.fire({
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
        Swal.fire({
            type: 'error',
            title: "Erro",
            text: "Ocorreu um erro ao processar a sua requisição!"
        });
        console.log(error);
    };
    ApiService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map