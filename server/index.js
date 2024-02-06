const express = require("express")
const app = express()
const postsRouter = require("./postsRouter")

app.set("view engine", "ejs")
app.set("views", __dirname + "/../views")
app.use(express.static(__dirname + "/../public"))

app.use(express.json())
app.use("/posts", postsRouter)

app.listen(8080)
console.log('Server is listening on port 8080')

