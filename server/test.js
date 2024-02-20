const mysql = require("mysql")
const config = require("./config/config")

const connection = mysql.createConnection(config.db)
connection.connect()
connection.query("SELECT * FROM notesData", (err, rows, fields) => {
    if (err) throw err 
    console.log(rows)
})


connection.end()