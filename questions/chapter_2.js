// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let name = "james"

name = 'james mcarthur'

// 2. How would you compare two variables, a and b, to check equality?

let a = 7
let b = '7'

console.log(a === b)

// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".

let age = 27

if (age > 18) {
    console.log('Adult')
} else {
    console.log('Minor')
}


// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

let numbers_to_ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_length = numbers_to_ten.length

for (let i = 0; i < array_length; i++) {
    let current_value = numbers_to_ten[i]
    let is_even = current_value % 2 === 0
    if (is_even) {
        console.log(current_value)
    }
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.

let array_of_numbers = [20, 4, 5, 8, 13, 25, 442, 56, 39, 12]

let sum = 0
let i = 0

while (sum < 100) {
    let new_current_value = array_of_numbers[i]
    sum = sum + new_current_value

    i++
}

console.log(sum)

// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height

function calculateArea(width, height) {
    let area = width * height
    return area
}

let area_one = calculateArea(9, 10)
let area_two = calculateArea(9, 14)

console.log('The calculated area: ', area_one)
console.log('The calculated area: ', area_two)