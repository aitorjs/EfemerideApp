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
          tmpData.push(normalize($(this), $))
        })

        while (!$(next).is('h2')) {
          if ($(next).is('ul')) {
            $(next).children().each(function () {
              tmpData.push(normalize($(this), $))
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

function normalize (elem, $) {
  let date = $(elem).children().html()
  let description = {}

  if (!isNaN(parseInt(date))) {
    date = parseInt(date)
    description = $(elem).children().parent().text().slice(date.length + 2)
  } else {
    date = $(elem).text().split(':')
    date.length >= 2
      ? description = date[1].trim()
      : description = date[0].replace('\n', '')
  }

  return {
    date,
    description: utils.capitalizeFirstLetter(description)
  }
}

module.exports = fetchData
