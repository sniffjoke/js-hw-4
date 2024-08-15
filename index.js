// 1

// const country_proprty = 'country';
// const property = 'new_';
//
// const person = {
//     name: 'Kirill',
//     age: 24,
//     address: {
//         [country_proprty]: 'Poland',
//         [property + 'city']: 'Warsaw',
//     },
// };

// country_proprty и property являются динамические свойствами

// 2

// const name_property = 'last';
// const role_property = 'user';
//
// const employee = {
//     firstName: 'Ivan',
//     [name_property + 'Name']: 'Ivanov',
//     ['middle' + 'Name']: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         [role_property.toUpperCase()]: 'user',
//     },
// };
//
// console.log(employee);
                        //  {
                        //      firstName: 'Ivan',
                        //      lastName: 'Ivanov',
                        //      middleName: 'Ivanovich',
                        //      message: 'Hello world!',
                        //      permission: {
                        //          canEdit: true,
                        //          canDelete: false,
                        //          USER: 'user',
                        //      }
                        //  }

// 3

// let student = {
//     name: 'John',
//     age: 20,
//     course: 'Math'
// }
//
// function propertyCount(arr) {
//     return Object.keys(arr).length;
// }
//
// console.log(propertyCount(student))

// 4

// let scores = {
//     math: 90,
//     english: 85,
//     science: 92,
// };
//
// function totalScore(arr) {
//     return Object.values(arr).reduce((acc, curr) => {
//         return acc + curr;
//     })
// }
//
// console.log(totalScore(scores))

// let obj = { a: 1, b: 2, c: 3 };

// function objectToArray(arr) {
//     return Object.entries(arr)
// }

// console.log(objectToArray(obj))

// 6

// const newMap = new Map();
//
// newMap.set('Bob', 4)
// newMap.set('Jack', 5)
// newMap.set('John', 6)
// newMap.set('Mike', 7)
// newMap.set('David', 8)
//
// console.log(newMap.get('Bob'))

// let products = new Map([
//     ['Milk', 1.2],
//     ['Bread', 1.5],
//     ['Cheese', 2.5],
// ]);
//
// products.delete('Bread')
// console.log(products.has('Bread'))
// console.log(products)

// let fruits = new Set(['apple', 'banana', 'mango']);

// fruits.delete('banana')
// console.log(fruits.has('banana'));
// console.log(fruits)

// const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]
//
// const result = new Set([...numbers])
//
// console.log(result)

