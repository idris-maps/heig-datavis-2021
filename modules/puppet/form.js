const puppeteer = require('puppeteer')

let links = []

const wait = time => new Promise(resolve => setTimeout(resolve, time))

const run = async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  await page.goto('https://duckduckgo.com/')

  await page.$eval('#search_form_input_homepage', el => el.value = 'HEIG-VD')
  await page.$eval('#search_button_homepage', el => el.click())

  await wait(2000)

  page.on('console', msg => links.push(msg.text()))

  await page.$eval('body', el => {
    const h2s = Array.from(el.getElementsByTagName('h2'))
    h2s.map(h2 => {
      const a = h2.getElementsByTagName('a')[0]
      if (a) {
        console.log(a.getAttribute('href'))
      }
    })
  })

  await browser.close()
}

run()
  .then(() => console.log(links))
  .catch(console.log)