//Classes ES5
/* class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  static addNumbers(x, y){
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '1980.11.13');

mary.getsMarried('Doe');
console.log(mary);
console.log(mary.greeting());

console.log(Person.addNumbers(1,2)); */

//Classes ES6
class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there, ${this.firstName} ${this.lastName}.`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());