'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let outPut = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassingning outer scope's variable
      outPut = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(outPut);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
// printAge()

// Hoisting in practice

// With Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// With Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// The this keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

//var firstName = 'Matilda';

const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas1.greet();
jonas1.calcAge();

// arguments keyword
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 3, 4, 8, 18);

var addArrow1 = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow1(2, 5, 8); // ReferenceError: arguments is not defined
*/

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before', jessica1);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before', jessica2);
// console.log('After:', jessicaCopy);

// Deep copy / Deep clone
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('original:', jessica2);
console.log('Clone:', jessicaClone);
