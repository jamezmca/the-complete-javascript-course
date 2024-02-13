// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayFilter(arr) {
    let new_array = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue
        }
        new_array.push(arr[i])
    }

    return new_array
}

let filtered_array = arrayFilter(integers)
console.log(filtered_array)


//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

const names_and_ages = [
    { name: 'james', age: 27 },
    { name: 'lucy', age: 31 },
    { name: 'juan', age: 102 }
]

function findOldestPerson(arr) {
    let oldest_person = arr[0]

    for (let i = 1; i < arr.length; i++) {
        let new_person = arr[i]
        if (new_person['age'] > oldest_person.age) {
            oldest_person = new_person
        }
    }
    return oldest_person
}

let found_oldest_person = findOldestPerson(names_and_ages)
console.log(found_oldest_person)


// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

let array_of_strings = ['4', '8', '2', '10', '5']
let new_array_of_numbers = []

for (let i = 0; i < array_of_strings.length; i++) {
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers)

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]

array_of_objects.sort(function (a, b) {
    return b.price - a.price
})

console.log(array_of_objects)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

let demo_array = [0, 1, 2, 3, 4, 5]
function trimArray(arr) {
    let array_length = arr.length
    const trimmed_array = arr.slice(1, array_length - 1)
    return trimmed_array
}

console.log(trimArray(demo_array))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.

let shopping_cart = {
    'cheese': {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}

function sumProducts(obj) {
    let object_keys = Object.keys(obj)
    let sum = 0

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        const key_data = shopping_cart[current_key]
        let product_total = key_data.price * key_data.quantity
        sum = sum + product_total
    }

    return sum
}

console.log(sumProducts(shopping_cart))

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone(obj) {
    let new_object = {}

    let object_keys = Object.keys(obj)

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        new_object[current_key] = obj[current_key]
    }

    return new_object
}

let new_friends = deepClone(friend)

friend.james = {
    hobbies: ['sleep']
}
console.log(new_friends)

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function findAverageGrade(obj) {
    let sum = 0
    let number_of_subjects = 0

    let list_of_subjects = Object.keys(obj)

    for (let i = 0; i < list_of_subjects.length; i++) {
        let current_key = list_of_subjects[i]
        let subject_grade = student[current_key].grade

        sum = sum + subject_grade
        number_of_subjects++
    }

    let average_grade = sum / number_of_subjects
    return average_grade
}


console.log(findAverageGrade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.

function inception() {
    let number_of_invocations = 0

    return function () {
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = inception()

incrementer()
incrementer()
incrementer()
incrementer()
incrementer()

// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]

function sortByGrade(arr) {
    let sorted_array = grades_array.sort(function (a, b) {
        return b.grade - a.grade
    })

    return sorted_array
}

console.log(sortByGrade(grades_array))


// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filterShortStrings(arr) {
    let new_array_of_long_strings = []

    for (let i = 0; i < arr.length; i++) {
        let current_string = arr[i]
        if (current_string.length > 5) {
            new_array_of_long_strings.push(current_string)
        }
    }

    return new_array_of_long_strings
}

console.log(filterShortStrings(array_of_short_strings))

// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

let sentence = 'hello world my name is hello, is is , what a grade world, my, banana, james, cool'

function wordCounter(str) {
    let counter_dict = {}

    let string_to_array = str.replaceAll(',', '').split(' ')

    for (let i = 0; i < string_to_array.length; i++) {
        let current_word = string_to_array[i]

        if (current_word in counter_dict) {
            counter_dict[current_word] = counter_dict[current_word] + 1
        } else {
            counter_dict[current_word] = 1
        }
    }
    return counter_dict
}

console.log(wordCounter(sentence))