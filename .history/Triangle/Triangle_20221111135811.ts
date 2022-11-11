import {Shape} from './Shape'

export class Triangle extends Shape {
  public side1: number;
  public side2: number;
  public side3: number;

  constructor(side1: number, side2: number, side3: number) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  public getSide1(): number {
    return this.side1;
  }
  public getSide2(): number {
    return this.side2;
  }
  public getSide3(): number {
    return this.side3;
  }
  public setSide1(side1: number): void {
    this.side1 = side1;
  }
  public setSide2(side2: number): void {
    this.side2 = side2;
  }
  public setSide3(side3: number): void {
    this.side3 = side3;
  }

  public getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  public getArea(): number {
    return this.getPerimeter() * 
}
