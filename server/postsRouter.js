const express = require("express")
const router = express.Router()
const db = require("./db")

router.get("/", (req, res) => {
  res.send(db)
})

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id
    const post = db.posts.find(it => it.id == id)
    if (!post) throw "Post not found"
    if (!post.isPublic) throw "Unauthorized"
    res.render("pages/post", { post })
  } catch(e) {
    res.render((e === "Unauthorized")
      ? "pages/unauth"
      : "pages/error")
  }
})

module.exports = router
