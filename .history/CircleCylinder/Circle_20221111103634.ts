

export class Circle {
    private radius: number = 1.0;
    private color: string = "green";
    private filled: boolean = true;

    constructor(radius: number, color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
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