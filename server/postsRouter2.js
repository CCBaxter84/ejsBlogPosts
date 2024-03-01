const express = require("express")
const router = express.Router()
const db = require("./db")
const { isValidPost } = require("./helpers")

router.get("/", (_, res) => {
  try {
    const posts = db.posts.filter(post => post.isPublic)
    res.render("pages/posts", { posts })
  } catch {
    res.render("pages/error")
  }
})

router.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = db.posts.find(it => it.id === id)
    if (isValidPost(post)) {
      res.render("pages/post", { post })
    } else {
      throw "Post not found"
    }    
  } catch {
    res.render("pages/error")
  }
})

module.exports = router