'use strict'

const utils = {
  capitalizeFirstLetter,
  getLastDayOfMonth,
  toMonth
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getLastDayOfMonth (year) {
  let lastDay = []
  for (let month = 1; month <= 12; month++) {
    lastDay[month] = new Date(year, month, 0).getDate()
  }

  return lastDay
}

function toMonth (number) {
  let months = ['',
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]

  return months[number]
}

module.exports = utils
