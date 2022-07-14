// // FUNCTIONS IN JS

// // Adding two numbers
// // function functionName(parameters) { ...body }
// function sum(a, b) {
//     if(typeof a == 'number' && typeof b == 'number') {
//         return a + b
//     } else {
//         return "NOT POSSIBLE"
//     }
// }

// function minus(a, b) {
//     return a - b
// }

// function divide(a, b) {
//     return  a/b
// }

// const result1 = sum(100, 200)
// const result2 = sum('String One', 'String Two')
// const result3 = sum(200, true)

// const result4 = minus('String One', 'String Two')
// const result5 = divide(true, false)

// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(result5)


// CONSITIONAL STATEMENTS
const val1 = 1
const val2 = 1

if(val1 === val2) {
    console.log('They are SAME')
} else {
    console.log('They are NOT SAME')
}

// ARROW FUNCTIONS (=>)

// Voting System
// M -> >= 21
// F -> >= 18
// const votingSystem = (gender, age) => { 
//     if(gender === 'M' && age >= 21) {
//         console.log('You can Vote')
//     } else if(gender === 'F' && age >= 18) {
//         console.log('You can Vote')
//     } else {
//         console.log('You cannot Vote')
//     }
// }

// const add = (a, b) => (a+b)
// const sub = (a, b) => a-b

// votingSystem('M', 18)


// const arr1 = [100, 200, 300, 400, 500]
// const arr2 = [ ...arr1 ]

// arr2.pop()
// console.log(arr2)
// console.log(arr1)

// Anoynomous Functions
// const print = () => console.log('Hello...')

// setTimeout(() => console.log('Hello...'), 2000)

// OBJECTS

// 1. Object Constructor
const myObject = new Object()

myObject.name = 'User One'
myObject.email = 'userone@hostname.com'
myObject.age = 23
console.log(myObject)

// 2. Use { }
const student = {
    // key: value
    rno: 0010,
    name: 'Student One',
    age: 18,
    percentage: '83%',
    hobbies: ['Code', 'Parties', 'Listening to Music'],
    address: {
        street: 'Street 1',
        city: 'Chandigarh',
        state: 'Punjab'
    }
}

const students = [
    {
    // key: value
    rno: 0010,
    name: 'Student One',
    age: 18,
    percentage: '83%',
    hobbies: ['Code', 'Parties', 'Listening to Music'],
    address: {
        street: 'Street 1',
        city: 'Chandigarh',
        state: 'Punjab'
    }
    },
    {
        // key: value
        rno: 0011,
        name: 'Student Two',
        age: 17,
        percentage: '89%',
        hobbies: ['Tennis', 'Badminton'],
        address: {
            street: 'Street 10',
            city: 'Chandigarh',
            state: 'Punjab'
        }
    },
    {
        // key: value
        rno: 0015,
        name: 'Student Three',
        age: 20,
        percentage: '93%',
        hobbies: ['Cricket', 'Soccer'],
        address: {
            street: 'Street 15',
            city: 'Chandigarh',
            state: 'Punjab'
        }
    }
]

console.log(students)