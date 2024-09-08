export class Calories {
  private amount: number;
  private unit: string;

  constructor(amount: number, unit: string) {
    this.amount = amount;
    this.unit = unit;
  }

  getAmount(): number {
    return this.amount;
  }

  getUnit(): string {
    return this.unit;
  }

  getFormattedCalories(): string {
    return `${this.amount}${this.unit}`;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  setUnit(unit: string): void {
    this.unit = unit;
  }
}
