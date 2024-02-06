const express = require("express")
const app = express()
const db = require("./db")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.get("/", () => {
  res.send(db)
})

app.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = db.posts.find(it => it.id === id)
    if (!post) throw "Post not found"
    if (!post.isPublic) throw "Unauthorized"
    res.render("pages/post", { post })
  } catch(e) {
    res.render((e === "Unauthorized")
      ? "pages/unauth"
      : "pages/error")
  }
})

app.listen(8080)
console.log('Server is listening on port 8080')

