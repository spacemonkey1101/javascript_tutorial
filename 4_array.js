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
