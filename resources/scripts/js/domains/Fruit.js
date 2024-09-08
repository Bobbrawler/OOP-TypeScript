"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
class Fruit {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getCalories() {
        return this.calories;
    }
    getAllInfoString() {
        return `Name: ${this.name}, Price: ${this.price}, Calories: ${this.calories}`;
    }
}
exports.Fruit = Fruit;
class Apple extends Fruit {
    constructor() {
        super("Apple", 25, 150);
    }
}
class Pear extends Fruit {
    constructor() {
        super("Pear", 40, 200);
    }
}
class Pineapple extends Fruit {
    constructor() {
        super("Pineapple", 120, 300);
    }
}
