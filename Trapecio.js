"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGeometrica_1 = require("./FiguraGeometrica");
var Trapecio = /** @class */ (function (_super) {
    __extends(Trapecio, _super);
    function Trapecio(base, altura, baseMayor) {
        var _this = _super.call(this, base, altura) || this;
        _this.baseMayor = baseMayor;
        return _this;
    }
    Trapecio.prototype.calcularArea = function () {
        if (this.base != this.baseMayor)
            return ((this.altura * (this.baseMayor + this.base)) / 2);
        else
            console.log('La figura ingresada no es un trapecio.');
        return null;
    };
    return Trapecio;
}(FiguraGeometrica_1["default"]));
exports["default"] = Trapecio;
