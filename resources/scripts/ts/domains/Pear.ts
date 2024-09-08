import { Fruit } from "./Fruit";
import { Price } from "./Price";
import { Calories } from "./Calories";

const pearPrice = new Price(75, "RUBBLE");
const pearCalories = new Calories(100, "kcal");

export class Pear extends Fruit {
    private size: string;
  
    constructor(size: string) {
      super("Pear", pearPrice, pearCalories);
      this.size = size;
    }
  
    setSize(size: string): void {
      this.size = size;
    }
  }
  