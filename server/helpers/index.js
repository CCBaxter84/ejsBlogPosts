module.exports = {
  isValidPost(post) {
    try {
      const fields = [ "id", "title", "article" ]
      for (let index = 0; index < fields.length; index++) {
        const field = fields[index]
        if (!post.hasOwnProperty(field)) {
          return false
        }
      }
      return true
    } catch {
      return false
    }
  }
}