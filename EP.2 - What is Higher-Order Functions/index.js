// EP2
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

// EP3
// ForEach
// Without Higher-Order Functions
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) continue;
//   console.log(`Name ${person.name}, age ${person.age}`);
// }

// With Higher-Order Functions
persons.forEach((person) =>
  console.log(`Name ${person.name}, age ${person.age}`)
);

// Find, FindIndex
// Without Higher-Order Functions
// let jane;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.name === "Jane") {
//     jane = person;
//     break;
//   }
// }
// console.log("Jane: ", jane);

// With Higher-Order Functions
const jane = persons.find((person) => person.name === "Jane");
const janeIndex = persons.findIndex((person) => person.name === "Jane");
console.log("Jane: ", jane);
console.log("Jane index: ", janeIndex);

// Every, some
// Without Higher-Order Functions
// let isKid = true;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) {
//     isKid = false;
//     break;
//   }
// }

// With Higher-Order Functions
// const isKid = persons.every((person) => person.age <= 15);
const isKid = persons.some((person) => person.age <= 15);
console.log("isKid: ", isKid);
