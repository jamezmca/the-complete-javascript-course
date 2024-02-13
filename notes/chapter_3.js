// data manipulation

const { addStrings, example_array } = require("./chapter_2")


let example_sentence = 'this_is_a_string'

let string_length = example_sentence.length

//regex



//array and lists

let simple_array = [1, 4, 2, 3, 5] // 1 dimensional

//crud - create read update delete
// for (let i = 0; i < simple_array.length; i++) {
//     let subArray = simple_array[i]
//     for (let j = 0; j < subArray.length; j++) {
//         console.log(i, j, simple_array[i][j])
//     }
// }

let index_of_three = simple_array.indexOf(3)
let start_array = simple_array.slice(0, index_of_three)
let end_array = simple_array.slice(index_of_three + 1)

let new_filtered_array = start_array.concat(end_array)

// console.log(new_filtered_array)



// dictionaries or objects

const bio = {
    name: 'james',
    age: 27,
    hobbies: ['gym', 'coding', 'reading'],
    friends: {
        'juan': {
            description: 'good at maths'
        }
    }
}

console.log('joke' in bio)

function helloWorld() {
    let sentence = 'hello world'
    console.log(sentence)
}


function counter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

let increment = counter()

increment()
increment()

// console.log(example_array)

// error handling and debugging
const broken_object = {
    word: 'nice'
}

function problematicCodeBlock() {
    try {
        console.log('Attempted the try block')
        const sub_object = broken_object.hello.world
        console.log(sub_object)
    } catch (err) {
        console.error(err.message)
    }


}

// problematicCodeBlock()



function throwError() {
    try {
        
        throw new Error('custom error message')
    } catch (err) {
        console.log(err.message)
    }
}

throwError()
console.log('code continued to execute')