import { Calories } from "./Calories";

export class BasketCaloriesCalculator {
  private totalCalories: number = 0;
  public unit: string = "kcal";

  constructor(unit: string) {
    if (unit !== "kcal") {
      console.log("ERROR");
      return;
    }

    this.unit = unit;
  }

  getTotalCalories(): number {
    return this.totalCalories;
  }

  updateCalories(addFruitCalories: Calories): void {
    this.totalCalories += addFruitCalories.getAmount();
  }

  clearCalories(): void {
    this.totalCalories = 0;
  }
}
