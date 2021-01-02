/* Prototype explain */
/*
//Object.prototype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = () => {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//Gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName()); */


/* Protorype Inheritence */
//Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
  return `Hello there, ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype mehtods
Customer.prototype = Object.create(Person.prototype);
//Make Customer.prototype Custome()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1)

//Customer greeting
Customer. prototype.greeting = function(){
  return `Hello there, ${this.firstName} ${this.lastName}, welcome to our company!`;
}

console.log(customer1.greeting());