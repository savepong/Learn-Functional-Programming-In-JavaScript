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

3. [Higher-Order Functions คืออะไร (2/2)](https://www.youtube.com/watch?v=pEFbMsogLdo&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=4)

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

4. [สร้าง Higher-Order Functions ด้วยตนเอง](https://www.youtube.com/watch?v=FbeLpM6V9pA&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=5)

5. [Closures คืออะไร](https://www.youtube.com/watch?v=Qb1bHuyc4XI&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=6)

```JavaScript
/** What's Clousures? **/

  function outer() {
    const name = 'Outer';
    return function inner() {
      console.log('Outer name: ', name);
    }
  }
  const innerFunction = outer()
  innerFunction();
  // Outer name:  Outer
```

```JavaScript
/** Data privacy **/

  function createTimes() {
    let counter = 0;
    return function times() {
      counter += 1;
      console.log('Counter: ', counter);
    }
  }
  const times = createTimes();
  times();
  times();
  times();
  // Counter:  1
  // Counter:  2
  // Counter:  3
```

```JavaScript
/** Stateful function **/

  function createAdd(a) {
    return function(b) {
      return a + b
    }
  }
  const addFive = createAdd(5);
  const addTen = createAdd(10);

  console.log('Add Five: ', addFive(10))
  console.log('Add Ten: ', addTen(10))
  // Add Five:  15
  // Add Ten:  20
```

6. [Recursion คืออะไร](https://www.youtube.com/watch?v=tZ9ofxNNql0&list=PLOgiLP3tCaPUDsXEB-3dGGO3oxGDRMmQe&index=7)

```JavaScript
// f(1) = 1;
// f(2) = 2 * f(1)
// f(3) = 3 * f(2)
// f(4) = 4 * f(3) => 24

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('Factorial: ', factorial(4))
// Factorial: 24
```

```JavaScript
// c => c
// bc => reverse(c) + b
// abc => reverse(bc) + a

function reverse(str) {
  if (str.length === 1) return str;
  const [firstCharacter] = str;
  const remainingCharacters = str.substring(1)
  return reverse(remainingCharacters) + firstCharacter
}
console.log('Reverse: ', reverse('abc'))
// Reverse: cba
```
