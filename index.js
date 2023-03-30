// Code your solutions in this file
const birthday = ["Charlie", "Samip", "Ali"];

function writeCards(birthday) {
  const emptyArray =[]
for (let i = 0; i < birthday.length; i++) {
emptyArray.push(`Thank you, ${birthday[i]}, for the wonderful surprise gift!`)
}
return emptyArray}

function countDown(n) {

let countDown = n
while (countDown >= 0){
    console.log(countDown --)
}}