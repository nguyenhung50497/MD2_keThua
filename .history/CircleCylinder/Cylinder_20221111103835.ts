import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private height: number = 1.0;


    constructor(height: number, radius: number, color: string, filled: boolean) {
        super(radiuscolor, filled);
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }

    // override method
    public toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }
}