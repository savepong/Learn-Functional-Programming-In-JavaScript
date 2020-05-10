# Functional Programming in JavaScript

1. [Functional Programming คืออะไร](https://www.youtube.com/watch?v=-iNKn5eBIak&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=2)

```JavaScript
function addPure(a, b) {
  return a + b;
}
console.log("Pure Function: ", addPure(1, 6));
// Pure Function:  7


const b = 6;
function addSideEffect(a) {
  return a + b;
}
console.log("Side Effect: ", addSideEffect(1));
// Side Effect:  7


const addAssigning = function (a, b) {
  return a + b;
};
console.log("Assigning: ", addAssigning(1, 6));
// Assigning:  7


function addReturning(a, b) {
  return function () {
    return a + b;
  };
}
const addTwoNumber = addReturning(1, 6);
console.log("Returning: ", addTwoNumber());
// Returning:  7


function addNumber(a, b) {
  return a + b;
}

function addAccepting(add, a, b) {
  return add(a, b);
}

console.log("Accepting: ", addAccepting(addNumber, 1, 6));
// Accepting:  7
```

2. [Higher-Order Functions คืออะไร (1/2)](https://www.youtube.com/watch?v=kapV19HYHzE&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=3)

```JavaScript
const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

const kids = persons.filter((person) => person.age <= 15);
// kids:  (2) [{…}, {…}]

const olderPersons = persons.map((person) => ({
  ...person,
  age: person.age * 2,
}));
// olderPersons:  (3) [{…}, {…}, {…}]

const totalAge = persons.reduce((age, person) => age + person.age, 0);
// totalAge: 42
```

2. [Higher-Order Functions คืออะไร (2/2)](https://www.youtube.com/watch?v=pEFbMsogLdo&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=4)

```JavaScript
const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];

persons.forEach((person) =>
  console.log(`Name ${person.name}, age ${person.age}`)
);
// Name John, age 17
// Name Jane, age 10
// Name Jim, age 15

const jane = persons.find((person) => person.name === "Jane");
// jane:  {name: "Jane", age: 10}

const janeIndex = persons.findIndex((person) => person.name === "Jane");
// janeIndex:  1

const isKid = persons.some((person) => person.age <= 15);
// isKid:  false
```
