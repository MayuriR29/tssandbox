class Point {
  //   private x: number;
  //   private y: number; not required in typescript

  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log("_x:", this._x, ",_y:", this._y);
  }
  get x() {
    // can be any name,it is called getter
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(value) {
    if (value < 0) throw new Error("Value cannot be less than 0");
    this._x = value;
  }
}

let point = new Point(1, 2);
let point1 = new Point();

let a = point.y;
console.log("a", a);
