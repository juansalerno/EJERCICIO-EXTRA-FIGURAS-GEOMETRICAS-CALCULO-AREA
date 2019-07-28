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
var Romboide = /** @class */ (function (_super) {
    __extends(Romboide, _super);
    function Romboide(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Romboide.prototype.calcularArea = function () {
        return (this.base * this.altura);
    };
    return Romboide;
}(FiguraGeometrica_1["default"]));
exports["default"] = Romboide;
