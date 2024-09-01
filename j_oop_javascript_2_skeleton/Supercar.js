// Creating a Supercar class
// Supercar is a child class of Car 
// const Car = require("./Car.js");

import Car from "./Car.js"; // ES6 module import format

// extend the Supercar class to inherit the properties of Car
class Supercar extends Car{

    // store the values of the car in the super class
    constructor(make, model, year){
        super(make, model, year);
        this.kilometersDriven = 50;              // Override the parent class's property: kilometersDriven (currently zero)
        this.warranty = true;
    }

    // the drive() method of Supercar class uses the same method from the Car class
    drive(distance){
        super.drive(distance);
    }

    // the getTotalKilometersDriven() method of Supercar class uses the same method from Car class
    getTotalKilometersDriven(){
        return super.getTotalKilometersDriven();
    }

    // the setWarranty() method is only available in the Supercar class
    setWarranty(status){
        this.warranty = status;
    }

    // the getWarranty() method is only available in the Supercar class
    getWarranty(){
        return this.warranty;
    }
}

// static Method does not have to be instantiated as an instance
// static Method can be directly accessed via the class itself
static welcomeStatement(msg){
     console.log{(msg);
     }
}

Supercar.welcomeStatement("Welcome to the Super Car class!");

let mySuperCar = new Supercar("Maserati", "MC20", 2020);

mySuperCar.drive(100);
mySuperCar.drive(100);

// console.log("mySupercar(km driven): " + mySuperCar.getTotalKilometersDriven());

// mySuperCar.setWarranty(false);
// console.log("warranty status: " + mySuperCar.getWarranty());

// CHALLENGE
// Create a new instance of a Supercar
// Make = Ferrari
// Model = SF90 Stradale
// Year = 2019
// The car has been driven for 400KM
// Print out the results on totalKilometers driven.

const superCar2 = new Supercar("Ferrari", "SF90", 2010);
superCar2.drive(350);
console.log(`The superCar2 ${superCar2.model} has been driven ${superCar2.getTotalKilometersDriven()}`);

