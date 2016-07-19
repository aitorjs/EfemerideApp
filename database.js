'use strict'

let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/julio')
let database = {}

database.createTable = function () {
  return new Promise(function (resolve, reject) {
    db.run('DROP TABLE IF EXISTS events')
    db.run('CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, day INTEGER, data TEXT)')
    console.log('La tabla de eventos ha sido correctamente creada')
    resolve(db)
  })
}

database.insert = function (data) {
  console.log(`Insertando día ${data.day}...`)
  var stmt = db.prepare('INSERT INTO events VALUES (?,?,?)')
  stmt.run(null, data.day, JSON.stringify(data.data))
  stmt.finalize()
}

database.getsByDay = function (day, callback) {
  db.all('SELECT * FROM events WHERE day = ' + day, function (err, res) {
    if (err) {
      throw err
    } else {
      callback(null, res)
    }
  })
}

module.exports = database
