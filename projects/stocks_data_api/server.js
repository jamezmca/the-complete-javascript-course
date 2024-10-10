// step 1 - define the web scraper

const cheerio = require('cheerio')

let stockTicker = 'pypl'
let type = 'history'

async function scrapeData(ticker) {
    try {
        // step a - fetch the page html
        const url = `https://finance.yahoo.com/quote/${ticker}/${type}?p=${ticker}`
        const res = await fetch(url)
        const html = await res.text()

        const $ = cheerio.load(html)
        const price_history = getPrices($)
        return price_history
        console.log(price_history)
    } catch (err) {
        console.log(err.message)
    }
}

async function fetchHTML(ticker, type) {
    const url = `https://finance.yahoo.com/quote/${ticker}/${type}?p=${ticker}`
    let headers = {
        "Content-Type": "application/json",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.google.com/',
        'Connection': 'keep-alive',
    }
    const res = await fetch(url, {
        method: 'GET',
        headers: headers
    })
    const html = await res.text()
    return html
    const $ = cheerio.load(html)
}

function getPrices(cher) {
    const prices = cher('td:nth-child(6)').get().map((current_value) => {
        return cher(current_value).text()
    })
    return prices
}

// step 2 - initialize server that serves up an html file that the user can play with

const express = require('express')
const app = express()
const port = 8383

// middleware
app.use(express.json())
app.use(require('cors')())
app.use(express.static('public'))

// step 3 - define api endpoints to access stock data (and call webscraper)

app.get('/test', async (req, res) => {
    const html = await fetchHTML('pypl', 'history')
    return html
})

app.post('/api', async (req, res) => {
    const { stock_ticker: ticker } = req.body
    console.log(ticker)
    const prices = await scrapeData(ticker)
    res.status(200).send({ prices })
})

app.listen(port, () => { console.log(`Server has started on port: ${port}`) })