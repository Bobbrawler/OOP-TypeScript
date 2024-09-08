class Fruit {

    constructor ( protected name: string, protected price: number, protected calories: number) {}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getCalories(): number {
        return this.calories;
    }

    getAllInfoString(): string {
        return `Name: ${this.name}, Price: ${this.price}, Calories: ${this.calories}`;
    }

}

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

class Basket {
    private fruits: Fruit[] = [];

    addFruit(fruit: Fruit): void {

        this.fruits.push(fruit);

    } 

    getTotalPrice(): number {

        return this.fruits.reduce((total,fruit) => total + fruit.getPrice(), 0);

    }

    getTotalCalories(): number {

        return this.fruits.reduce((total,fruit) => total + fruit.getCalories(), 0);

    }

    listFruits(): string[] {

        return this.fruits.map(fruit => fruit.getAllInfoString());

    }

    getFruitCount(): number {

        return this.fruits.length;

    }

    printAllInfo(): void {

        console.log(`Number of fruits: ${this.getFruitCount()}\n`);
        console.log(`Fruits in basket:\n${basket.listFruits().join("\n")}`);
        console.log(`\nTotal price: ${basket.getTotalPrice()}`);
        console.log(`Total calories: ${basket.getTotalCalories()}`);

    }

    clear(): void {

        this.fruits.length = 0;

    }

}

const pineapple = new Pineapple();
const greenPear = new Pear();
const redApple = new Apple();
const basket = new Basket();

basket.addFruit(pineapple);
basket.addFruit(greenPear);
basket.addFruit(redApple);

basket.printAllInfo();
