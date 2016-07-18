'use strict'

let utils = require('./utils')
let fetchData = require('./fetchData')

let year = 2016
let month = 7 // TODO: meterlo en for para que funcione por año ???
let lang = 'es'

let events = {}
let lastDays = utils.getLastDayOfMonth(year)

start()

function start () {
  let monthT = utils.toMonth(month)
  let lastDay = lastDays[month]

  for (let day = 1; day <= lastDay; day++) {
    fetchData.fetch(day, monthT, lang, events).then(function (res) {
      events[res.day] = res
    })
  }

  setTimeout(function () { console.log(events) }, 3000)
}
