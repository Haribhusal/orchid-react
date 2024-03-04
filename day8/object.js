// let personName = "Binod";
// let personAge = 22;
// let personAddress = "Kathmandu";
// let personIsMarried = false;

let person = {
  name: "Binod",
  age: 22,
  address: "Kathmandu",
  isMarried: false,
  explain: function () {
    let sentence = `Hello, My name is ${this.name}, I am ${this.age}
    years old. I live in ${this.address} and I am 
    ${this.isMarried ? "married" : "unmarried"}.
    `;
    return sentence;
  },
};

console.log(person.explain());
//Access values
// Using Dot Notation
// console.log(person.address);

// // Using Bracket Notation
// console.log(person["isMarried"]);

// person.address = "Pokhara";

// console.log(person.address);
