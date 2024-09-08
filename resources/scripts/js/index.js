"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
const currencies_1 = require("../../scripts/ts/utils/currencies");
const currencyNames = Object.keys(currencies_1.currencies);
console.log(currencyNames);
class Price {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    getAmount() {
        return this.amount;
    }
    getCurrency() {
        return this.currency;
    }
    getFormattedPrice() {
        return `${this.amount}${currencies_1.currencies[this.currency]}`;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    setCurrency(currency) {
        this.currency = currency;
    }
}
class Calories {
    constructor(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }
    getAmount() {
        return this.amount;
    }
    getUnit() {
        return this.unit;
    }
    getFormattedCalories() {
        return `${this.amount}${this.unit}`;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    setUnit(unit) {
        this.unit = unit;
    }
}
class BasketPriceCalculator {
    constructor(currency) {
        this.totalAmount = 0;
        this.currency = "RUBBLE";
        if (!currencyNames.includes(currency)) {
            console.log("ERROR");
            return;
        }
        this.currency = currency;
    }
    getTotalAmount() {
        return `${this.totalAmount}${currencies_1.currencies[this.currency]}`;
    }
    updatePrice(addFruitPrice) {
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
    clearPrice() {
        this.totalAmount = 0;
    }
}
class BasketCaloriesCalculator {
    constructor(unit) {
        this.totalCalories = 0;
        this.unit = "kcal";
        if (unit !== "kcal") {
            console.log("ERROR");
            return;
        }
        this.unit = unit;
    }
    getTotalCalories() {
        return this.totalCalories;
    }
    updateCalories(addFruitCalories) {
        this.totalCalories += addFruitCalories.getAmount();
    }
    clearCalories() {
        this.totalCalories = 0;
    }
}
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
    setName(name) {
        this.name = name;
    }
    setPrice(priceAmount, priceCurrency) {
        this.price = new Price(priceAmount, priceCurrency);
    }
    setCalories(caloriesAmount, caloriesUnit) {
        this.calories = new Calories(caloriesAmount, caloriesUnit);
    }
    getAllInfoString() {
        return `Name: ${this.name}, Price: ${this.price.getFormattedPrice()}, Calories: ${this.calories.getFormattedCalories()}`;
    }
}
exports.Fruit = Fruit;
class Apple extends Fruit {
    constructor(color) {
        super("Apple", applePrice, appleCalories);
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}
class Pear extends Fruit {
    constructor(size) {
        super("Pear", pearPrice, pearCalories);
        this.size = size;
    }
    setSize(size) {
        this.size = size;
    }
}
class Pineapple extends Fruit {
    constructor(origin) {
        super("Pineapple", pineapplePrice, pineappleCalories);
        this.origin = origin;
    }
    setOrigin(origin) {
        this.origin = origin;
    }
}
class Basket {
    constructor(fruits = []) {
        this.fruits = fruits;
        this.priceCalculator = new BasketPriceCalculator("RUBBLE");
        this.caloriesCalculator = new BasketCaloriesCalculator("kcal");
    }
    addFruit(fruit) {
        if ((fruit.getPrice().getAmount() < 0) || (fruit.getCalories().getAmount() < 0) || !(currencyNames.includes(fruit.getPrice().getCurrency())) || (fruit.getCalories().getUnit() !== "kcal")) {
            console.log("ERROR ADDING FRUIT IN BASKET");
            return;
        }
        this.fruits.push(fruit);
        this.priceCalculator.updatePrice(fruit.getPrice());
        this.caloriesCalculator.updateCalories(fruit.getCalories());
    }
    getListFruits() {
        return this.fruits.map((fruit) => fruit.getAllInfoString());
    }
    getFruitCount() {
        return this.fruits.length;
    }
    clear() {
        this.fruits = [];
        this.priceCalculator.clearPrice();
        this.caloriesCalculator.clearCalories();
    }
    getAllInformationBasket() {
        const currency = this.priceCalculator.currency;
        console.log(`Count of fruits: ${this.getFruitCount()}\n\n`);
        console.log(`Fruits in basket:\n`);
        console.log(this.getListFruits().join("\n"));
        console.log(`Total price: ${this.priceCalculator.getTotalAmount()}\n\n`);
        console.log(`Total calories: ${this.caloriesCalculator.getTotalCalories()}${this.caloriesCalculator.unit}\n\n`);
    }
}
const applePrice = new Price(50, "RUBBLE");
const pearPrice = new Price(75, "RUBBLE");
const pineapplePrice = new Price(150, "RUBBLE");
const appleCalories = new Calories(80, "kcal");
const pearCalories = new Calories(100, "kcal");
const pineappleCalories = new Calories(300, "kcal");
const basket = new Basket();
