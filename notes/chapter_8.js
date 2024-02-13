// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

function isUnique(str) {
    let count_dict = {}

    for (let i = 0; i < str.length; i++) {
        let current_char = str[i]
        if (current_char in count_dict) {
            return false
        }
        count_dict[current_char] = 1
    }

    return true
}

console.log(isUnique(string_3))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let arr_1 = [2, 4, 6]
let arr_2 = [1, 3, 5]

function mergeSort(array_1, array_2) {
    let merged_array = [...array_1, ...array_2].sort()
    return merged_array
}

console.log(mergeSort(arr_1, arr_2))


// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.

let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5]

function findAllDuplicates(nums) {
    let duplicates = []
    let count_dict = {}

    for (let current_value of nums) {
        if (current_value in count_dict) {
            duplicates.push(current_value)
        } else {
            count_dict[current_value] = 1
        }
    }
    return duplicates
}

console.log(findAllDuplicates(dummy_arr))

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 

let start_array = [1, 2, 3, 4, 5, 6]
let k = 3
let finish_array = [4, 5, 6, 1, 2, 3]

function rotateArray(nums, k) {
    let end_values = nums.slice(k)
    let start_values = nums.slice(0, k)

    let new_array = [...end_values, ...start_values]
    return new_array
}

console.log(rotateArray(start_array, k))

// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let s = "()[]{}"
let s_2 = "([])[]]{}{]}"

function validParenthesis(str) {
    const combos = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    let stack = []

    for (let current_bracket of str) {
        if (stack.length === 0) {
            stack.push(current_bracket)
        } else if (current_bracket in combos) {
            stack.push(current_bracket)
        } else {
            let last_value_on_stack = stack[stack.length - 1]
            if (!(last_value_on_stack in combos)) {
                stack.push(current_bracket)
            } else {
                if (combos[last_value_on_stack] === current_bracket) {
                    stack.pop()
                }
            }
        }

    }

    return stack.length === 0
}

console.log(validParenthesis(s_2))