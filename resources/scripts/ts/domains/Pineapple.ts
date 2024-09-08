import { Fruit } from "./Fruit";
import { Price } from "./Price";
import { Calories } from "./Calories";

const pineapplePrice = new Price(150, "RUBBLE");
const pineappleCalories = new Calories(300, "kcal");

export class Pineapple extends Fruit {
    private origin: string;
  
    constructor(origin: string) {
      super("Pineapple", pineapplePrice, pineappleCalories);
      this.origin = origin;
    }
  
    setOrigin(origin: string): void {
      this.origin = origin;
    }
  }