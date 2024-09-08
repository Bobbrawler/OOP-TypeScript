import { currencies } from "../utils/currencies";

export class Price {
  private amount: number;
  private currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getAmount(): number {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }

  getFormattedPrice(): string {
    return `${this.amount}${
      currencies[this.currency as keyof typeof currencies]
    }`;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  setCurrency(currency: string): void {
    this.currency = currency;
  }
}
