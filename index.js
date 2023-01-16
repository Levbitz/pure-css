const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const length = document.querySelector(".length").value;
  const width = document.querySelector(".width").value;
  const result = document.querySelector(".result");
  const area = length * width;

  result.innerHTML = `${area} cm squared`;
});

//alert("Am connected");

//print
// print echo
//public static
//console.log()

// console.log("Frank");

// const name = document.querySelector(".myName");
// name.innerHTML = "My Name";

// Data types

// integers ( float (2.9)   number  2)
//string ( text xters   "Frank"
//array  ['Frank' , 'levson' , 2  ,20.3]
//object

// const person = {
//   name: "Frank",
//   age: 20,
//   nationality: 'Ugandan',
//   academicStatus: 'Univ',
//   marital:'married'
// }

// Boolean(true  false)
//    frank is a woman
//undefined  boolean ,strings arrays objects int  (num float)

//key words  const -- constantant , variable  var let  let

// const - dont change
// ///var - dont change / change(scope)
// let - chagn

// let myName;
// myName = 'Frank'

// const name = "Frank";
// const Age = 20;

// const me = "my name is " + name + " and  am " + Age + " years old";
// //EcmaScript  ES6 string interpolation
// const me2 = `my name is ${name} and am ${Age} years old`;

// console.log(me);
// console.log(me2);

const num1 = 30;
const num2 = 2;

const sum = num1 + num2;
console.log(sum);

const dif = num1 - num2;
console.log(dif);

const pdt = num1 * num2;
console.log(pdt);
