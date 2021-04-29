const puppeteer = require('puppeteer')

const sizes = [
  { type: 'iphone', width: 375, height: 812 },
  { type: 'ipad', width: 768, height: 1024 },
  { type: 'laptop', width: 1540, height: 877 },
]

const capture = browser => async ({ type, width, height }) => {
  const page = await browser.newPage()
  await page.goto('https://heig-vd.ch/')
  await page.setViewport({ width, height })
  await page.screenshot({ path: `site_heig_${type}.png` })
}

const run = async () => {
  const browser = await puppeteer.launch()
  await Promise.all(sizes.map(capture(browser)))
  await browser.close()
}

run()