const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

// Filter
// Without Higher-Order Functions
// const kids = [];
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age <= 15) {
//     kids.push(person);
//   }
// }

// With Higher-Order Functions
const kids = persons.filter((person) => person.age <= 15);
console.log("Kids: ", kids);

// Map
// Without Higher-Order Functions
// const olderPersons = [];
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   olderPersons.push({
//     ...person,
//     age: person.age * 2,
//   });
// }

// With Higher-Order Functions
const olderPersons = persons.map((person) => ({
  ...person,
  age: person.age * 2,
}));
console.log("Older persons: ", olderPersons);

// Reduce
// Without Higher-Order Functions
// let totalAge = 0;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   totalAge += person.age;
// }

// With Higher-Order Functions
const totalAge = persons.reduce((age, person) => age + person.age, 0);
console.log("Total age: ", totalAge);
