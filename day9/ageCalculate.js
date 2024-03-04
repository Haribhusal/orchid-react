class Person {
  constructor(dob) {
    this.dob = dob;
  }
  calculateAge() {
    let date = new Date();
    let currentYear = date.getFullYear();
    console.log(currentYear);
    let age = currentYear - this.dob;
    return age;
  }
}

person1 = new Person(1998);
person2 = new Person(2001);
let ageCalculated = person1.calculateAge();
console.log(ageCalculated);
