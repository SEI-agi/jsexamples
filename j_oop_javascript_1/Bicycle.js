class Bicycle
    // default properties of Bicycle
    constructor(size, color){
        this.size = size;
        this.color = color;
        this.numWheels = 2;
    }

    // default method of Bicycle
    info(){
        console.log(`The size is ${this.size}`);
        console.log(`The color is $(this.color}`);
        console.log(`Number of wheels are ${this.numWheels}`);
    }

    changeWheels (numWheels = 2){
        this.numWheels = numWheels;
    }
)

const bicycle = new Bicycle("small, "red");
    bicycle.changeWheels(4);
    bicycle.info();

    console.log("****")

    const bicycle2 = new Bicycle("Big", "blue");
    bicycle2.info();

