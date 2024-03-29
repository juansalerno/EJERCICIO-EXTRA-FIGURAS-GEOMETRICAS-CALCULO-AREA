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
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Cuadrado.prototype.calcularArea = function () {
        if (this.base == this.altura)
            return (Math.pow(this.base, 2));
        else
            console.log('La figura creada no es un cuadrado');
        return null;
    };
    return Cuadrado;
}(FiguraGeometrica_1["default"]));
exports["default"] = Cuadrado;
