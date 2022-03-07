// number

const age = 100
const money = 1000.50
console.log(typeof age) // number
console.log(typeof money) // number
// type of is used to find out the type of  variable
console.log('10' - '3')

// the above works with multipliction , division and subtraction
// but not with addition(+)
// because the + sign is also used for **concatenation**
// ------------------

// math helper methods:
console.log(Math.round(2.2))
console.log(Math.floor(5.6))
console.log(Math.ceil(8.4))
console.log(Math.random())

const sweets = 20
const kids = 3
const eachKidGets = Math.floor(sweets / kids)
console.log(eachKidGets)
const leftsweets = sweets % kids
console.log(leftsweets)
// -----------------------
let x = 2 ** 3
console.log(x)
x = Math.pow(2, 3)
console.log(x)
// -----
console.log(0.1 + 0.2)
// let costOfproduct = 100.95;
const costOfProduct = 10095 // in paise
/* so when working with money, dont store them as rupees.paise or dollr.cents.
store all of the money in paise/cents
s you wont have to deal with fractions only whole nos.
we need to display to user, just convert them back */
console.log(typeof Infinity)
console.log(typeof -Infinity)
const result = 10 / 'hello'
console.log(typeof NaN)

// -------------------
// check the dataype of a value
const x1 = 100
const result1 = Number.isInteger(x1)
console.log(`is x a number: ${result}`)
const y = 'abcd'
const result2 = Number.isInteger(y)
console.log(`is y a number: ${result2}`)
result3 = (typeof y === 'string')
console.log(`is y a string: ${result3}`)
const flag = true
result4 = (typeof flag === 'boolean')
console.log(`is flag a boolean: ${result4}`)
const nos = [1, 2, 3, 4, 5]
result5 = (typeof nos === 'object')
console.log(`is x an object:${result5}`)
