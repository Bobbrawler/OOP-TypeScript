import { Fruit } from "./Fruit";
import { BasketPriceCalculator } from "./BasketPriceCalculator";
import { BasketCaloriesCalculator } from "./BasketCaloriesCalculator";
import { currencies } from "../utils/currencies";

const currencyNames = Object.keys(currencies);

export class Basket {
    private fruits: Fruit[];
    private priceCalculator: BasketPriceCalculator;
    private caloriesCalculator: BasketCaloriesCalculator;
  
    constructor(fruits: Fruit[] = []) {
      this.fruits = fruits;
      this.priceCalculator = new BasketPriceCalculator("RUBBLE");
      this.caloriesCalculator = new BasketCaloriesCalculator("kcal");
    }
  
    addFruit(fruit: Fruit): void {
      if (
        fruit.getPrice().getAmount() < 0 ||
        fruit.getCalories().getAmount() < 0 ||
        !currencyNames.includes(fruit.getPrice().getCurrency()) ||
        fruit.getCalories().getUnit() !== "kcal"
      ) {
        console.log("ERROR ADDING FRUIT IN BASKET");
        return;
      }
      this.fruits.push(fruit);
      this.priceCalculator.updatePrice(fruit.getPrice());
      this.caloriesCalculator.updateCalories(fruit.getCalories());
    }
  
    getListFruits(): string[] {
      return this.fruits.map((fruit) => fruit.getAllInfoString());
    }
  
    getFruitCount(): number {
      return this.fruits.length;
    }
  
    clear(): void {
      this.fruits = [];
      this.priceCalculator.clearPrice();
      this.caloriesCalculator.clearCalories();
    }
  
    getAllInformationBasket(): void {
      const currency = this.priceCalculator.currency;
      console.log(`Count of fruits: ${this.getFruitCount()}\n\n`);
      console.log(`Fruits in basket:\n`);
      console.log(this.getListFruits().join("\n"));
      console.log(`Total price: ${this.priceCalculator.getTotalAmount()}\n\n`);
      console.log(
        `Total calories: ${this.caloriesCalculator.getTotalCalories()}${
          this.caloriesCalculator.unit
        }\n\n`
      );
    }
  }