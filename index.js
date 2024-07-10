// Task 1:
//(Masalalar sharti biroz o'zgartirib bajarildi)

// let num = prompt("Enter a number")

// const countNum = (num) => {
//     let count = 0;
//     let result = "";
//     if (!isNaN(num)) {
//         let array = num.toString().split('')

//         for (let i = 0; i < array.length; i++) {
//             count++
//         }

//         result = alert(` ${num} is ${count} - digit number ✅ `);
//     }
//     else {
//         result = alert("Enter only Numbers!!!🔢");
//     }

//     return result;
// }
// countNum(num)

// Task 2

// let mixed_data = prompt("Enter data that includes numbers !!! ")

// const countNum = (mixed_data) => {
//     let count = 0;
//     for (let i = 0; i <= mixed_data.length; i++) {
//         if (!isNaN(mixed_data[i])) {
//             count++
//         }
//     }
//     return alert(`${mixed_data} includes ${count} numbers`);

// }
// countNum(mixed_data)


// Task 3 :

// const countWord = (userdata = "".toLowerCase()) => {
//     let count = 0;
//     for (let i = 0; i < userdata.length; i++) {
//         if (userdata[i].includes("a")) {
//             count++

//         }

//     }

//     console.log(`${userdata} includes words ${count} that includes a letter`);

// }

// countWord("My major is Aerospace engineering but i also like the Web Programming")


// Task 4
// const minMaxWord = (str) =>{
// let arr = str.split(" ")
// let minWord = arr[0];
// let maxWord = arr[0];
// for (const item of arr) {
//     if (item.length < minWord.length) {
//         minWord = item
      
//     }
//     if (item.length > maxWord.length) {
//         maxWord = item
//     }

// }
//     console.log(`Max word is ${maxWord} and Min word is ${minWord}`);
// }
// minMaxWord("sun Venera Jupiter Mars Neptun")









// Task 5

// let array = ["sun", "Venera", "Jupiter", "Mars", "Neptun"]

// function countStr(array) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] = array[i].length
//     }
//     console.log(obj);
// }
// countStr(array)

// Task 6

// let num = prompt("Enter number");
// function getLevel() {

//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(Math.pow(num,i))
//     }
//     console.log(arr)
// }

// getLevel()

// Task 7

let array = [ 1,2,3,4,5,6]

function findMiddle() {
    let index = Math.floor(array.length / 2)
    console.log(index);

    let middle = 0;

    if (array.length % 2 == 0) {
        middle = (array[index] + array[index - 1]) / 2
    } else {
        middle = array[index]
    }
    console.log(middle); 
}
findMiddle()