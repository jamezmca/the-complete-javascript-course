const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchData() {
    try {
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.log(err.message)
    }
}

fetchData()