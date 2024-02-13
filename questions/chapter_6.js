
// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    await sleep(2000)
    console.log('hello world')
}

// run()

// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/nonexistent')
        console.log(res)
    } catch (err) {
        console.log('Error fetching data')
    }
}

// fetchData()

// 3. Write an async function named fetchUserData that makes a GET request to 'https://the-one-api.dev/v2/' using async/await. Log the response to the console, handling any errors that might occur.

async function fetchUserData() {
    try {
        const res = await fetch('https://the-one-api.dev/v2/book')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log('Error fetching data')
    }
}

// fetchUserData()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await. Ensure you set the appropriate headers and catch any errors.

async function postUserData() {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: 'james' })
        }

        const res = await fetch('https://the-one-api.dev/v2/book', options)
        // const data = await res.json()
    } catch (err) {
        console.log('Error fetching data')
    }
}