const person = {
  first: 'venkatesh',
  last: 'waran',
  age: 21

}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'tom'
person.last = 'jerry'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)

const empty = {}
const point = { x: 10, y: 50 }
console.log(point.x)
console.log(point.y)
const point2 = { x: point.x, y: point.y + 1 }
const book = {
  'main title': 'java script', // property names include spaces
  'sub-title': 'Guide to java Script for beginners',
  for: 'students', // reserved key word

  author: {
    first: 'venkatesh',
    last: 'waran'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// console.log(book.sub-title)
console.log(book.for)
