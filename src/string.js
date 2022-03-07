const myname = 'NamefieldEmpty'
const middle = 'Gabbbar'
const last = 'singh'

console.log(myname)
console.log(middle)
console.log(last)

const sentence1 = 'shes\'s so "cool"'
console.log(sentence1)
const sentence2 = "shes's so cool"
console.log(sentence2)
const sentence3 = 'shes\'s so "cool"'
console.log(sentence3)
const sentence4 = "shes's so \"cool\""
console.log(sentence4)

const song1 = 'I Like ARR songs and Anirudh songs'
console.log(song1)
const hello3 = 'hello my name is' + myname + '. Nice to meet you'
console.log(hello3)
const hello4 = `hello my name is ${myname}. Nice to meet you' ${1 + 100} years old`
console.log(hello4)

const html = `
            <div>
            <h2>${myname}</h2>
            <p>${hello4}</p>
            </div>
            `
console.log(html)
// document.body.innerHTML = 'html'
