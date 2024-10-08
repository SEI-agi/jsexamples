// a) Create a person object
const person = { name: "John"} 
console.log(person);

// b) In JavaScript, constructor functions CAN be used to create objects
// Note: only 2 properties are available in the constructor function. 
function Person(fName, lName, age = 18) { 
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

const person1 = new Person("John","Doe"); 
const person2 = new Person("Steve", "Smith");
const person3 = new Person("Yong", "Jin Kai", 18);

console.log(person1.__proto__); 
console.log(person2.__proto__);
console.log(person3.age);


// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.

Person.prototype.gender = "Male";
console.log(person1.gender); 
console.log(person2.gender);

// d) Add a new METHOD gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits getFullName method from its constructor ftn too.

Person.prototype.getFullName = function(){ 
    return this.firstName +" "+ this.lastName;
};

console.log("Greetings " + person1.getFullName()); 
console.log("Greetings " + person2.getFullName());

Person.prototype.getGender = function(){
    return this.age;
}

console.log(person1.getFullName() + " is of gender " + person1.getGender() + ".");

