// primitive
// 7 types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
//reference (non-primitive)
// 3 types: Object, Array, Function
const str = "Boddireddy Vaishnavi"
const  score = 100
let isLoggedIn = true
let userEmail;
let userId = null
var id=Symbol("123")
var anotherId=Symbol("123")
const bigInt = 1234567890123456789012345678901234567890n

const user = {
    name: "Boddireddy Vaishnavi",
    age: 20,
    isLoggedIn: true,
    email: "boddireddyvaishnavi@example.com"
}
console.log(user)
console.log(id == anotherId)
const heros = ["Nani", "Mahesh", "Vijay", "Allu Arjun"]
let myobject = {
    name: "Vaishnavi",
    age: 20,
    isLoggedIn: true,
    email: "vaishnavi@example.com"
}
const myFunction = function() {
    console.log("Welcome to JavaScript")
}
console.log(typeof heros, typeof myobject, typeof myFunction)
console.log(id, anotherId)