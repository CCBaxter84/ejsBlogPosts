module.exports = {
  isValidPost(post) {
    const fields = [ "id", "title", "article" ]
    const hasRequiredFields = fields.every(field => post.hasOwnProperty(field))
    const { isPublic } = post
    return hasRequiredFields && isPublic
  }
}