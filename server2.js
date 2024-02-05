const express = require("express")
const app = express()
const db = require("./db")
const { isValidPost } = require("./helpers")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.get("/", () => {
  res.send(db)
})

app.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = db.posts.find(it => it.id === id)
    if (!isValidPost(post)) throw "Post not found"
    res.render("pages/post", { post })
  } catch {
    res.render("pages/error")
  }
})

app.listen(8080)
console.log('Server is listening on port 8080')

