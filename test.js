import puppeteer from "puppeteer"

// example 01
const screenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://www.google.com/ncr", {
    domcontentloaded: true,
  })
  page.setViewport({ width: 1000, height: 500 })
  await page.screenshot({ path: "./google.png" })
  await browser.close()
}

// example 02
const scrapeData = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("http://books.toscrape.com/", {
    domcontentloaded: true,
  })
  page.setViewport({ width: 1000, height: 500 })
  await page.screenshot({ path: "./books.png" })
  const results = await page.evaluate(() => {
    return document.querySelector("title").text
  })
  console.log(results)
  await browser.close()
}
;(async () => {
  // await screenshot()
  await scrapeData()
})()
