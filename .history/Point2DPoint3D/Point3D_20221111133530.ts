import {Point2D} from './Point2D'

export class Point3D extends Point2D {
    public z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }

    public getZ(): number {
        
}