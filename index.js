 const arr = [1,2,3,4,5,3,7,8,9]
 let fin = arr.reverse()

const { values, map, entries } = require("lodash")

console.log(fin)
const arr_1 = [324,54,7,45123,6,5,8345]
let fin_1 = arr.fill(1)
console.log(fin_1)
const arr_2 = ["pakistan","is","a","good","country"]
let fin_2 = arr_2.join("")
console.log(fin_2)
const arr_3 = ["javascript",1,"a",3]
let fin_3 = arr_3.toString()
console.log(fin_3)
let fin_4 = arr.concat(arr_1)
console.log(fin_4)
let fin_5 = arr.splice(2,2)
console.log(fin_5)
let fin_6 = arr.lastIndexOf(3)
console.log(fin_6)
let fin_7 = arr_1.indexOf(7)
console.log(fin_7)
let fin_8 = Array.of(1,2,3)
console.log(fin_8)
let fin_9 = arr_1.slice(2,6)
console.log(fin_9)
const user=[
    {name:"muzammal",age:26,id:1},
    {name:"muz",age:23,id:2},
    {name:"muz",age:23,id:4},
    {name:"Tom",age:52,id:3}

]
let new_1 = user.filter((values)=>values.name==="muz")
console.log(new_1)
let fin_10 = arr_1.includes(12)
console.log(fin_10)
let fin_11 = arr_1.map((values)=>values*2)
console.log(fin_11)
let now = (num)=>num-1;
arr_1.forEach((Number,index)=>{
    arr_1[index]=Number*2
})
console.log(arr_1)

function iseven(number){
    return number % 2===0
}
console.log(arr_1.every(iseven))
let what = [345,6,768,"345",34]
let iterator = what.entries();
for (let entry of iterator){
    console.log(entry)
}
let iterator_1 = what.keys()
for (key of iterator_1){
    console.log(key)
}

let iterator_2 = what.values()
 for (key of iterator_2){
     console.log(key)
 }

let what_1 = Array.from("what")
console.log(what_1)

let what_2 = what.constructor;
console.log(what_2)
let st = ["apple", "ball", "cat", "dog"];

arr_1.copyWithin(3,0)
console.log(arr_1)
 let arr_4 = arr_1.toLocaleString();
 console.log(arr_4)

