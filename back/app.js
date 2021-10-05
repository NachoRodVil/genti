require("dotenv/config")
const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/users")
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use("/users", userRoutes)

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log("DB connectedd"))

app.listen(3001)
