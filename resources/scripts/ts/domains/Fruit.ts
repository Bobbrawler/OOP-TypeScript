import { Price } from "./Price";
import { Calories } from "./Calories";




export class Fruit {
  private name: string;
  private price: Price;
  private calories: Calories;

  constructor(name: string, price: Price, calories: Calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): Price {
    return this.price;
  }

  getCalories(): Calories {
    return this.calories;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPrice(priceAmount: number, priceCurrency: string): void {
    this.price = new Price(priceAmount, priceCurrency);
  }

  setCalories(caloriesAmount: number, caloriesUnit: string): void {
    this.calories = new Calories(caloriesAmount, caloriesUnit);
  }

  getAllInfoString(): string {
    return `Name: ${
      this.name
    }, Price: ${this.price.getFormattedPrice()}, Calories: ${this.calories.getFormattedCalories()}`;
  }
}