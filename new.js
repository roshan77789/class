let firstNum = 0
let secondNum = 3

firstNum > 1
  ? console.log('first Number is largest')
  : firstNum > 2
  ? console.log('First number is second largest')
  : secondNum === 3
  ? console.log('Second Number is largest')
  : console.log('hello world')

let a = prompt('What is your name')

alert(`Your name is ${a}`)

let b = confirm('do you want to exit')

console.log(b)

b ? window.close() : window.screen()
