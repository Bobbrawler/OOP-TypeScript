import { Fruit } from "./Fruit";
import { Price } from "./Price";
import { Calories } from "./Calories";
const applePrice = new Price(50, "RUBBLE");
const appleCalories = new Calories(80, "kcal");

export class Apple extends Fruit {
    private color: string;
  
    constructor(color: string) {
      super("Apple", applePrice, appleCalories);
      this.color = color;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }