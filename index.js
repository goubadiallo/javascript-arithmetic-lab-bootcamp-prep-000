1 + 80 // 81
60 - 40 // 20
2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
5.0 / 2.5 // 2

var number = 5
 
number++ // 5... hmmmm
 
number // 6 -- the number was incremented after it was evaluated
 
number-- // 6
 
number // 5
number += 3 //8
number -= 2 // 3
number *= 10 // 50
number /= 5 // 1
var number = 10
 
function add() {
  number += 5
}
 
function divideBy3() {
  number /= 3
}
 
divideBy3()
 
console.log(number) // 3.333333333335
 
add()
 
console.log(number) // 8.333333333335
 
// reset number
number = 10
 
add()
 
console.log(number) // 15
 
divideBy3()
 
console.log(number) // 5