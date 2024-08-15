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


