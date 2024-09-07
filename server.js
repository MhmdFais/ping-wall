const express = require('express')
const path = require('path')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

const PORT = process.env.PORT || 8080

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/new", newRouter)
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})