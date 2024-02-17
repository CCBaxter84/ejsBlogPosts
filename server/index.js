const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const postsRouter = require("./postsRouter")

app.set("view engine", "ejs")
app.set("views", __dirname + "/../views")
app.set("layout", "layout")
app.use(expressLayouts)
app.use(express.static(__dirname + "/../public"))

app.use(express.json())
app.use("/posts", postsRouter)

app.listen(8081)
console.log('Server is listening on port 8081')

