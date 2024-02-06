const express = require("express")
const router = express.Router()
const db = require("./db")
const { isValidPost } = require("./helpers")

router.get("/", () => {
  res.send(db)
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

