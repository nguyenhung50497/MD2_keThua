import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";

let circle: Circle = new Circle(4, "indigo");
let cylinder: Cylinder = new Cylinder(4, 5, "red");

console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());

console.log(cylinder);
console.log();
