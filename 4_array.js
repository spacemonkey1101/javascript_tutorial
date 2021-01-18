let students = []
let roll = [565,569,561]
let mixed =["Radar" , 565 , -1 ,false,null]

mixed.length //4

roll[1] //569

roll[10000] // undefined    

mixed[0] // "Radar"
mixed[0][0] // "R"

mixed[0] = "Radio" //this does not happens in strings

//Built in array methods
//push add to end
//stacks
let movieLine = ["Tom", "Jack" ,"Ryan"]
movieLine.push("John") // ["Tom", "Jack" ,"Ryan" ,"John"]
//pop remove from first
movieLine.pop() // ["Tom", "Jack" ,"Ryan"]
movieLine.push("John","Harry") //["Tom", "Jack" ,"Ryan" ,"John","Harry"]

//shift remove from start
movieLine.shift() //"Tom"

//unshift add to start
movieLine.unshift("Ron") // ["Ron" ,"Jack" ,"Ryan" ,"John","Harry"]

//concat - merge arrays
movieLine.concat(students) //returns new array

//includes -looks for a value
movieLine.includes("John")//retuns true or false
//true

//indexOf -- find index 
movieLine.indexOf("Harry") //4
movieLine.indexOf("harry") //-1
//check if something is present in an array or not

//reverse - reverses the order of elements
movieLine.reverse() //inplace reversing
//["Harry" ,"John","Ryan" .......]

//slice
movieLine.slice() // returns a copy of the same array
//["Ron" ,"Jack" ,"Ryan" ,"John","Harry"]

movieLine.slice(3) // index 3 onwards
// ["John","Harry"]

movieLine.slice(2,4) // start from 2 and end at 4 (non-inclusive at end)
//["Ryan" ,"John"]

movieLine.slice(-2) // last 2 elements
// ["John","Harry"]

//splice -- delete and enter things
//movieLine.splice(start , deletecount , items) 
//does things inplace
movieLine.splice(3 , 2 ) // delete 2 things from index 3
//returns -["John","Harry"]
//movieLine -["Ron" ,"Jack" ,"Ryan"]

movieLine.splice(1,0,"Steve") //["Ron" ,"Steve","Jack" ,"Ryan"]
movieLine.splice(2,0, "Bruce","Wayne") ////["Ron" ,"Steve","Bruce", "Wayne" ,"Jack" ,"Ryan"]

//sort -- convert elements into string and compares UTF values
//TL;DR - its kinda useless

//does not sort numerically

//equality in arrays
['hi','bye'] === ['hi','bye']//false
[1] === [1]//false
[1] == [1]//false
[] == [] //false

//we are comparing references not content in == and ===
//[] always creates new memory references

//to understand referencs better
let nums = [1,2,3]
let numsCopy = nums

nums.push(4) 
nums // [1,2,3,4]
numsCopy//[1,2,3,4]

nums === numsCopy // true


//const in arrays
//we can use const in arrays
//values change but not the reference
const nums = [1,2,3]
nums.push(4) //[1,2,3,4]
nums[4] = 5 // no error
nums //[1,2,3,4,5]
nums = [1,2,3,4,5] // error [changing the reference]
//this ensures safety of data


//nested arrays
const gameBoard = [['X' , 'O', 'X'], 
                   ['O', null ,'X'],
                   ['O', 'O', 'X']]

gameBoard[1][1] //null
