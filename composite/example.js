var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Graphic = /** @class */ (function () {
    function Graphic() {
    }
    Graphic.prototype.add = function (graphic) {
        throw new Error("");
    };
    Graphic.prototype.remove = function (graphic) {
        throw new Error("");
    };
    Graphic.prototype.get = function (index) {
        throw new Error("");
    };
    Graphic.prototype.isComposite = function () {
        return false;
    };
    return Graphic;
}());
var GraphicComposite = /** @class */ (function (_super) {
    __extends(GraphicComposite, _super);
    function GraphicComposite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = new Array();
        return _this;
    }
    GraphicComposite.prototype.add = function (graphic) {
        this.graphics.push(graphic);
    };
    GraphicComposite.prototype.remove = function (graphic) {
        var index = this.graphics.indexOf(graphic);
        if (index > -1)
            this.graphics.slice(index, 1);
    };
    GraphicComposite.prototype.get = function (index) {
        return this.graphics[index];
    };
    GraphicComposite.prototype.isComposite = function () {
        return true;
    };
    return GraphicComposite;
}(Graphic));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.draw = function () {
        console.log('uma vez');
        console.log('Drawing this leaf...');
    };
    return Leaf;
}(Graphic));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.draw = function () {
        console.log("Drawing this table...");
        for (var _i = 0, _a = this.graphics; _i < _a.length; _i++) {
            var graphic = _a[_i];
            graphic.draw();
        }
    };
    return Table;
}(GraphicComposite));
function main() {
    var leaf = new Leaf();
    var table = new Table();
    table.add(new Leaf());
    /**
     * Simulando a implementação recebendo um componente qualquer
     */
    var component = leaf;
    if (component.isComposite()) {
        component.add(new Leaf());
    }
    component.draw();
    component = table;
    if (component.isComposite()) {
        component.add(new Leaf());
    }
    component.draw();
}
main();
