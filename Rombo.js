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
var Rombo = /** @class */ (function (_super) {
    __extends(Rombo, _super);
    function Rombo(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Rombo.prototype.calcularArea = function () {
        return ((this.base * this.altura) / 2);
    };
    return Rombo;
}(FiguraGeometrica_1["default"]));
exports["default"] = Rombo;
