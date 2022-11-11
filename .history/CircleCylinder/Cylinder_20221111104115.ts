import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private height: number = 1.0;


    constructor(height: number, radius: number, color: string) {
        super(radius, color);
        this.height = radius;
    }

    public getHeight() : number {
        return this.height;
    }

    p
    
}