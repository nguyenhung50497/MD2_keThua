import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private height: number = 1.0;


    constructor(height: number, radius: number, color: string) {
        super(radius, color);
        this.height = radius;
    }


    // override method
    public toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }
}