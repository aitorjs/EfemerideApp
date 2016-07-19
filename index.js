'use strict'

let utils = require('./utils')
let fetchData = require('./fetchData')
let database = require('./database')

let year = 2016
let month = 7 // TODO: meterlo en for para que funcione por año ???
let lang = 'es'

let events = {}
let lastDays = utils.getLastDayOfMonth(year)

database.createTable().then(function (db) {
  database.insert({
    day: 2,
    data: [{
      date: 28,
      data: 'Lorem'
    },
    {
      date: 29,
      data: 'Ipsum ipsum'
    }]
  })
})

setTimeout(function () {
  database.getsByDay(2, function (err, res) {
    if (err) { throw err }
    let data = JSON.parse(res[0]['data'])
    console.log(data[0]['date'])
  })
}, 3000)

start()

function start () {
  let monthT = utils.toMonth(month)
  let lastDay = lastDays[month]

  for (let day = 1; day <= lastDay; day++) {
    fetchData.fetch(day, monthT, lang, events).then(function (res) {
      events[res.day] = res
    })
  }

  // setTimeout(function () { console.log(events) }, 3000)
}
