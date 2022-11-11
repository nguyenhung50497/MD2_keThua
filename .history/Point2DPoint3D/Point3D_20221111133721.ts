import {Point2D} from './Point2D'

export class Point3D extends Point2D {
    public z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }

    public getZ(): number {
        return this.z;
    }

    public setZ(z: number): void {
        this.z = z;
    }

    public getXYZ(): object {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
        }
    }
    
    public setXYZ(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}