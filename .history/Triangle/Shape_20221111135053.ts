export class Shape {
    public name: string;
    public color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    

}