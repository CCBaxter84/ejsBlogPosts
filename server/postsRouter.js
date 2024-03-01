const express = require("express")
const router = express.Router()
const db = require("./db")

router.get("/", (_, res) => {
  try {
    const posts = db.posts.filter(post => post.isPublic)
    res.render("pages/posts", { posts })
  } catch(e) {
    res.render(getErrorPage(e))
  }
})

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id
    const post = db.posts.find(it => it.id == id)
    if (!post) throw "Post not found"
    if (!post.isPublic) throw "Unauthorized"
    res.render("pages/post", { post })
  } catch(e) {
    res.render(getErrorPage(e))
  }
})

module.exports = router

function getErrorPage(e) {
  return (e === "Unauthorized")
      ? "pages/unauth"
      : "pages/error"
}