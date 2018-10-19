var Point = /** @class */ (function () {
    //   private x: number;
    //   private y: number; not required in typescript
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("_x:", this._x, ",_y:", this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            // can be any name,it is called getter
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value cannot be less than 0");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var point1 = new Point();
var a = point.y;
console.log("a", a);
