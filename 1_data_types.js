//There are 5 Primary data types in JS

//1.Number

//Eg - {1,1111111,-1,1.111}

1 + 5 
1 - 5
1 * 5
1 / 5
1 % 5
1 ** 5
PEMDOS -- (1*3) + 5 / 7

//NAN - Not a Number
// 0 / 0 -NaN
// 1 + NaN -NaN

//typeof 4 --number
//typeof NaN -- number

//Variables
//let someName = value
let year = 1981
let year2 = 1972
let year3 = year + year2

//updating variables
let score = 0 //0
score = score + 5 //5
score += 5  //10
score-=10  //0
score+=1  //1
score++ //2
score-- //1

//'const' keyword is just like 'let' but it doesnt let us change the value
const age = 17
age //17
age = 21 //Error
age+=1 //Error

const pi = 3.14

//var is the old way of creating variables
var distance =10
distance+=5 //15


//2. Boolean -- true or false
let isAlive = true
let isLoggedIn = false

//variables can change type -- Dynamic Typing
isLoggedIn = 23 // legal

//Invalid and Valid variables
//let 1user = 5 //invalid
let user1 =5 //valid
let _user = 8//valid
let mom_age=58//valid
let $mom = true//valid

//3. String
let userName = "danny"
let userEmail = 'danny@gmail.com'
let age = '23'
let quote ="You had me at \"hello\"" //double quotes

//index and length
let animal = "dog"
animal[0] //"d"
animal[100] //undefined
animal.length //3 -- number of characters -- it is a property

"dog" + "cat" // "dogcat"
1 + "hi" //"1hi" type coersion

//built-in string methods
let name ="ritam"
name.toUpperCase() // "RITAM"

let msg = " Hi Love  "
msg.trim() //"Hi Love"

msg.trim().toUpperCase() //"HI LOVE"

//string methods with arguments
let name = 'catdog'
name.indexOf('cat') // 0
name.indexOf('dog') // 3
name.indexOf('z') // -1 -- not found

let message = "haha this is so funny!"
message.slice(5) // "this is so funny!"
message.slice(5,9) //"this"
message.slice(-7) //"funny!"

message.replace('h','H') //"Haha this is so funny!"
message.replaceAll('h','H') //"HaHa this is so funny!"




