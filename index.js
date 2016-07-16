'use strict'

var request = require('request')
var cheerio = require('cheerio')

request('https://es.wikipedia.org/wiki/17_de_julio', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html)
    var li = $('div#toc.toc').next().next().next().children()

    $(li).each(function(i, element){
      let date = $(this).children().html()
      let data = $(this).children().parent().text().slice(date.length + 2)

      if (!isNaN(parseInt(date))) {


        let metadata = {
          date: parseInt(date),
          data: capitalizeFirstLetter(data)
        }

        console.log(metadata)
      }

    })
  }
})


// Utils
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}