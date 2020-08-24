# design-pattern

A test on different design patterns

<br/>

## Project Setup

First install **`Typescript`** globally.

```
$ npm i -g typescript
```

<br/>

Clone the repo. To do so, go to the directory where you want to keep this repo. Then open the terminal from here and run the following command.

```
$ git clone git@github.com:Showrin/design-pattern.git
```

<br/>

Then navigate to the repository using this command.

```
$ cd design-pattern
```

<br/>

After cloning, if you are using **`yarn`**, install the required modules by running the following command.

```
$ yarn
```

<br/>

Or use the following command if you are using **`npm`**.

```
$ npm install
```

<br/>

Then run the following command and you will get products that are created using different design patterns.

```
$ yarn start
```

or

```
$ npm start
```

### Console Output

![Design-pattern-output-by-Showrin](https://i.imgur.com/QKBEmQd.png)

<br/>

## Dev Dependencies

This program has following development dependencies.

| Module Name           | Version | Why it's used                                            |
| --------------------- | ------- | -------------------------------------------------------- |
| @types/node           | ^14.6.0 | It's being used for using `require` syntax in typescript |
| chalk                 | ^4.1.0  | It's being used for giving colors to console texts       |
| console-table-printer | ^2.3.17 | It's being used for printing data in console as a table  |

<br/>

## Procedure: Factory Design Pattern

> **By analayzing the given interface, it seems to be following the Factory Design Pattern. Here's the procedure for creating `Car` and `Plane` class, using this design pattern.**

<br/>

First, the interface for `Vehicle` is implemented.

```
interface Vehicle {
	set_num_of_wheels(): number;
	set_num_of_passengers(): number;
	has_gas(): boolean;
}
```

<br />

Then, `Car` and `Plane` classes are implemented using the `Vehicle` interface.

```
class Car implements Vehicle {
	set_num_of_wheels() {
		return 4;
	}

	set_num_of_passengers() {
		return 4;
	}

	has_gas() {
		return true;
	}
}
```

```
class Plane implements Vehicle {
	set_num_of_wheels() {
		return 14;
	}

	set_num_of_passengers() {
		return 100;
	}

	has_gas() {
		return false;
	}
}
```

<br />

Then, the `VehicleFactory` class is implemented **that defines which vehicle should be created**.

```
class VehicleFactory {
	getCar(): Car {
		return new Car();
	}

	getPlane(): Plane {
		return new Plane();
	}
}
```

<br />

And now, it's time to create `Car` and `Plane` from the Factory Design Pattern.

```
import { Table } from "console-table-printer";
const chalk = require("chalk");

const vehicleFactory: VehicleFactory = new VehicleFactory();
const ourCar: Car = vehicleFactory.getCar();
const ourPlane: Plane = vehicleFactory.getPlane();

const table = new Table();

table.addRow(
  {
    Product: "Car",
    set_num_of_wheels: ourCar.set_num_of_wheels(),
    set_num_of_passengers: ourCar.set_num_of_passengers(),
    has_gas: ourCar.has_gas(),
  },
  { color: "red" }
);

table.addRow(
  {
    Product: "Plane",
    set_num_of_wheels: ourPlane.set_num_of_wheels(),
    set_num_of_passengers: ourPlane.set_num_of_passengers(),
    has_gas: ourPlane.has_gas(),
  },
  { color: "green" }
);

console.log(
  chalk.bold.red(
    "\n### These products are created using [" +
      chalk.underline("Factory Pattern") +
      "] ###"
  )
);

table.printTable();
```

### Output

![Factory-Pattern-Output-by-Showrin](https://i.imgur.com/wmM7iAo.png)
