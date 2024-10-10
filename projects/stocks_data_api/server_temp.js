// NOTE: Before running this script, make sure you have Puppeteer installed.
// You can install Puppeteer using the following command:
// npm install puppeteer

// Import Puppeteer module
const puppeteer = require('puppeteer')

// Define an asynchronous function that scrapes the specified URL
async function scrapeData(url) {
    if (!url) { return }
    
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: true })

    // Open a new page in the browser
    const page = await browser.newPage()

    // Navigate to the desired URL
    await page.goto(url)

    // Wait for the table's 6th column to load on the page (this ensures we wait for data to appear)
    await page.waitForSelector('td:nth-child(6)')

    // Extract the text content of all elements that match the selector 'td:nth-child(6)'
    const data = await page.evaluate(() => {
        // Select all elements that match the 'td:nth-child(6)' selector
        const elements = document.querySelectorAll('td:nth-child(6)')
        // Map over the elements and extract their text content into an array
        return Array.from(elements).map(element => element.textContent.trim())
    })

    // Close the browser instance
    await browser.close()

    // Return the extracted data array
    return data
}

// Asynchronous function to invoke the scrapeData function and handle the result
; (async () => {
    try {
        // Call the scrapeData function with the desired URL
        const data = await scrapeData('https://finance.yahoo.com/quote/PYPL/history/')

        // Log the returned data to the console
        console.log(data)
    } catch (error) {
        // Handle any errors that may occur during the scraping process
        console.error('Error:', error)
    }
})()

module.exports = { scrapeData }