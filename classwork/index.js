// let obj1 = {name: "Monalize", age:18, year:"2006",phone: 12345678}
// let payload = {...obj1,phone:`+${obj1.phone}` }

// Task 1

// function reverseStr(str) {
//     let reversed_str = str.split('').reverse().join('');
//     // console.log(reversed_str);

// }
// reverseStr("World")

// Task 2

// let data = prompt("enter data ")

// function findType() {
//     let result;
//     if (typeof (data) == "number") {
//         result = alert("number");
//     }
//     else if (typeof (data) == "string") {
//         result = alert("string");
//     }
//     return result;

// }
// findType()


// Task 3

// function countNum(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(str[i])) {
//             count++
//         }
//     }
//     return console.log(count);


// }
// countNum("hello4365")


// function mergeArrays(array1,...array2) {
//      let mergedArray = array1.concat(...array2)

//      return console.log(mergedArray);
// }
// mergeArrays([2,4,4,2],[4,5,3],["hello"],["world"],["hello"],["erhj"],["sdfhkl"])

// let array = ["null", 1, 5, 0, 'a', null, " ", 'bcd', undefined, "", false, , "hello World", "false", ""]
// let truthy = [];
// let falsy = [];

// array.forEach(function (value, inx, myarr) {
//     console.log(value);
//     if (value) {
//         console.log(truthy.push(value));
//     }
//     else {
//         console.log(truthy.push(value));
//     }
// });






// Task 4
// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab { minWord: “…”, maxWord: “….” } qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men dasturlash kursida o’qiyman” Output: { minWord: “Men”, maxWord: “dasturlash” }

// let userdata = ("Enter sentence")
// let array = []
// array.push(userdata)
// function findMinMAx(userdata) {
//     let maxWord = array[0]
//     let minWord = array[0]
// let result =[]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length < minWord.length ) {
//             minWord = array[i];
//         }
//         if (array[i].length > maxWord.length) {
//             maxWord = array[i];
//         }
//     }
// console.log(minWord);
// // result.push(minWord,maxWord)
// // console.log(result);
// }
// findMinMAx(userdata)