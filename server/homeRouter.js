const express = require("express")
const router = express.Router()

router.get("/", (_, res) => {
  try {
    res.render("pages/home")
  } catch {
    res.render("pages/error")
  }
})

module.exports = router