'use strict'

let request = require('request')
let cheerio = require('cheerio')

let lastDay = getLastDayOfMonth(2016)
let month = 7 // meterlo en for luego
let events = {}

start()

function start() {

  for (var day = 1; day <= 32; day++) {
    fetch(day, 'julio', 'es', events).then(function(res) {
      events[res.day] = res

    })

    setTimeout(function(){ console.log(events) }, 3000)
  }
}

function fetch(day, month, lang, events) {
  return new Promise(function(resolve) {
    var events = []
    var metadata = []

    request(`https://${lang}.wikipedia.org/wiki/${day}_de_${month}`, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html)
        var li = $('div#toc.toc').next().next().next().children()
        var nextUl = $('div#toc.toc').next().next().next().next().next().children()

        $(li).each(function(){
          normalize($(this), $, metadata)
        })

        // TODO: IF - si en nextUL hay 'Nacimientos', finalizar
        //          - si en nextUL hay un 'ul', normalize()

        if(nextUl) {
          $(nextUl).each(function(){
            normalize($(this), $, metadata)
          })
        }

        metadata.day = day
        resolve(metadata)
        // console.log(metadata)
      }
    })

  })
}

function normalize (elem, $, metadata) {
  let date = $(elem).children().html()
  // let data = $(this).children().parent().text().slice(date.length + 2)
  let data = $(elem).children().parent().text()

  // Para conseguir el siguiente ul aqui dentro
  // $(this).parent().next().next().html())

  if (!isNaN(parseInt(date))) {
    let scraped = {
      date: parseInt(date),
      data: capitalizeFirstLetter(data)
    }

    //console.log(`${day}_de_${month}`)
    metadata.push(scraped)
  }
}

// Utils
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getLastDayOfMonth(year) {
  var lastDay = []
  for (var month = 1; month <= 12; month++) {
    lastDay[month] = new Date(year, month, 0).getDate();
  }

  return lastDay
}