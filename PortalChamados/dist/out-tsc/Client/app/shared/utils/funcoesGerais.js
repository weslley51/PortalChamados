import { isNumber } from 'util';
var FuncoesGerais = /** @class */ (function () {
    function FuncoesGerais() {
    }
    FuncoesGerais.inteiroPositivo = function (valor) {
        if (isNumber(valor))
            return valor.toPrecision(0).length > 0;
        else
            return valor.replace(/^\D+/g, '').length > 0;
    };
    FuncoesGerais.apenasInteirosPositivos = function (valor) {
        if (isNumber(valor))
            return valor.toPrecision(0);
        else
            return valor.replace(/^\D+/g, '');
    };
    return FuncoesGerais;
}());
export { FuncoesGerais };
//# sourceMappingURL=funcoesGerais.js.map