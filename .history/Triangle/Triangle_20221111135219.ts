import {Shape} from './Shape'

export class Triangle extends Shape {
  public side1: number;
  public side2: number;
  public side3: number;

  constructor(side1: number, side2: number, side3: number) {
    super();
    this.side1 = side1;
