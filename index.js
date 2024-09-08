var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fruit = /** @class */ (function () {
    function Fruit(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
    Fruit.prototype.getName = function () {
        return this.name;
    };
    Fruit.prototype.getPrice = function () {
        return this.price;
    };
    Fruit.prototype.getCalories = function () {
        return this.calories;
    };
    Fruit.prototype.getAllInfoString = function () {
        return "Name: ".concat(this.name, ", Price: ").concat(this.price, ", Calories: ").concat(this.calories);
    };
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super.call(this, "Apple", 25, 150) || this;
    }
    return Apple;
}(Fruit));
var Pear = /** @class */ (function (_super) {
    __extends(Pear, _super);
    function Pear() {
        return _super.call(this, "Pear", 40, 200) || this;
    }
    return Pear;
}(Fruit));
var Pineapple = /** @class */ (function (_super) {
    __extends(Pineapple, _super);
    function Pineapple() {
        return _super.call(this, "Pineapple", 120, 300) || this;
    }
    return Pineapple;
}(Fruit));
var Basket = /** @class */ (function () {
    function Basket() {
        this.fruits = [];
    }
    Basket.prototype.addFruit = function (fruit) {
        this.fruits.push(fruit);
    };
    Basket.prototype.getTotalPrice = function () {
        return this.fruits.reduce(function (total, fruit) { return total + fruit.getPrice(); }, 0);
    };
    Basket.prototype.getTotalCalories = function () {
        return this.fruits.reduce(function (total, fruit) { return total + fruit.getCalories(); }, 0);
    };
    Basket.prototype.listFruits = function () {
        return this.fruits.map(function (fruit) { return fruit.getAllInfoString(); });
    };
    Basket.prototype.getFruitCount = function () {
        return this.fruits.length;
    };
    Basket.prototype.printAllInfo = function () {
        console.log("Number of fruits: ".concat(this.getFruitCount(), "\n"));
        console.log("Fruits in basket:\n".concat(basket.listFruits().join("\n")));
        console.log("\nTotal price: ".concat(basket.getTotalPrice()));
        console.log("Total calories: ".concat(basket.getTotalCalories()));
    };
    Basket.prototype.clear = function () {
        this.fruits.length = 0;
    };
    return Basket;
}());
var pineapple = new Pineapple();
var greenPear = new Pear();
var redApple = new Apple();
var basket = new Basket();
basket.addFruit(pineapple);
basket.addFruit(greenPear);
basket.addFruit(redApple);
basket.printAllInfo();
