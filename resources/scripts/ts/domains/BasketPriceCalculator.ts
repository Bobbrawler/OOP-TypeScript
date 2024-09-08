import { currencies } from "../utils/currencies";
import { Price } from "./Price";
const currencyNames = Object.keys(currencies);
export class BasketPriceCalculator {
    private totalAmount: number = 0;
    public currency: string = "RUBBLE";
  
    constructor(currency: string) {
      if (!currencyNames.includes(currency)) {
        console.log("ERROR");
        return;
      }
      this.currency = currency;
    }
  
    getTotalAmount(): string {
      return `${this.totalAmount}${
        currencies[this.currency as keyof typeof currencies]
      }`;
    }
  
    updatePrice(addFruitPrice: Price): void {
      if (this.currency === addFruitPrice.getCurrency()) {
        this.totalAmount += addFruitPrice.getAmount();
        return;
      }
  
      if (this.currency === "RUBBLE") {
        this.totalAmount += addFruitPrice.getAmount() * 90;
        return;
      }
  
      this.totalAmount += addFruitPrice.getAmount() / 90;
    }
  
    clearPrice(): void {
      this.totalAmount = 0;
    }
  }