const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")
const config = require("./config/config")
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use(cors())

const lockerRouter = express.Router()
const notesRouter = express.Router()

const connection = mysql.createConnection(config.db)
connection.connect()

lockerRouter.get("/vertify", (req, res) => {
    connection.query(`
        SELECT * FROM locker WHERE locker = "${req.query.locker}";
    `, (err, rows, fields) => {
        if (err) console.log(err)
        if (rows[0]) res.send(true)
        else res.send(false)
    })
})

lockerRouter.post("/create", (req, res) => {
    connection.query(`
        INSERT INTO locker (locker)
        VALUES ('${req.body.params.locker}');
    `, (err, rows, fields) => {
        if (err) console.log(err)
    })
})

notesRouter.get("/extract", (req, res) => {
    connection.query(`
        SELECT * FROM notesdata WHERE locker = "${req.query.locker}";
    `, (err, rows, fields) => {
        if (err) console.log(err)
        const extractedData = rows.map((row) => {
            return {
                id: row.id, 
                content: row.content, 
                date: row.date
            }
        })
        res.send(extractedData)
    })
})

notesRouter.post("/add", (req, res) => {
    console.log(req.body.params.noteData)
    const { id, content, date} = req.body.params.noteData
    connection.query(`
        INSERT INTO notesdata (locker, id, content, date)
        VALUES ("${req.body.params.locker}", "${id}", "${content}", "${date}");
    `, (err, rows, field) => {
        if (err) console.log(err)
    })
})


notesRouter.delete("/delete", (req, res) => {
    connection.query(`
        DELETE FROM notesdata WHERE locker = "${req.query.locker}" AND id = "${req.query.id}";
    `, (err, rows, fields) => {
        if (err) console.log(err)
    })
})

app.use("/locker", lockerRouter)
app.use("/notes", notesRouter)


app.all("/", (req, res, next) => {
    res.sendStatus(404);
    next()
})


app.listen(PORT, (err)=> {
    if (err) console.log(err)
    console.log("Server listening on port %d", PORT)
})