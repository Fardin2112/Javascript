// Math.random gives us to number between 0 to 0.99999999 almost 1
let num = Math.random()
console.log(num)


// Math.random gives us to number between 0 to 5.999 almost 6
let num1 = Math.random()*6
console.log(num1)


// lets maade a random number for ludo die
// 1 to 6
let die = Math.random()*6 + 1
// here we know that math.random()*6 genrate num from 0 to 5
// so we modify the result to our ans by add 1
console.log(die)


// here we directly get a number without float
let num2 = Math.floor(Math.random()*8)
console.log(num2)