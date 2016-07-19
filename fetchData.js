'use strict'

let request = require('request')
let cheerio = require('cheerio')
let utils = require('./utils')

const fetchData = {
  fetch,
  normalize
}

function fetch (day, month, lang, events) {
  return new Promise(function (resolve) {
    let metadata = []
    let tmpData = []

    request(`https://${lang}.wikipedia.org/wiki/${day}_de_${month}`, function (error, response, html) {
      if (!error && response.statusCode === 200) {
        let $ = cheerio.load(html)
        let li = $('div#toc.toc').next().next().next().children()
        let next = $('div#toc.toc').next().next().next().next()

        metadata.day = day

        $(li).each(function () {
          tmpData.push(normalize($(this), $, metadata))
        })

        while (!$(next).is('h2')) {
          if ($(next).is('ul')) {
            $(next).children().each(function () {
              tmpData.push(normalize($(this), $, metadata))
            })
          }
          next = $(next).next()
        }
        metadata.data = tmpData
        resolve(metadata)
      }
    })
  })
}

function normalize (elem, $, metadata) {
  let date = $(elem).children().html()
  let description = $(elem).children().parent().text().slice(date.length + 2)
  let scraped = {}

  if (!isNaN(parseInt(date))) {
    scraped = {
      date: parseInt(date),
      description: utils.capitalizeFirstLetter(description)
    }
  } else {
    date = $(elem).text().split(':')
    description = date[1].trim()

    scraped = {
      date: date[0],
      description: utils.capitalizeFirstLetter(description)
    }
  }

  return scraped
}

module.exports = fetchData
