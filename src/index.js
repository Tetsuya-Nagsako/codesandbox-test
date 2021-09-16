// const func = (str) => {
//   return str;
// };
// console.log(func('koko'));

// const sum = (num1, num2) => num1 + num2 ;

// console.log(sum(1,2));

// const myProfile = {
//   name: 'jake',
//   age: 28,
// };

// const mesa = `name is ${myProfile.name}. Iam ${myProfile.age}`;
//   console.log(mesa);

//   const { name, age } = myProfile;
// const mesa2 = `name is ${name}. Iam ${age}`;
// console.log(mesa2);

// const myProfile = ['jake', 20];

// const mesa3 = `name is ${myProfile[0]}. age is ${myProfile[1]}`;
// // console.log(mesa3);

// const [name, age] = myProfile;

// const mesa4 = `name is ${name}. age is ${age}`;
// console.log(mesa4);

// const sayHello = (name ) => console.log(`hello ${name} !`);
// sayHello(123);

// const arr1 = [1,2,3];
// // console.log(arr1);
// console.log(...arr1);

// const sum = (num1, num2, num3) => console.log(num1 + num2 + num3);

// sum(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);
