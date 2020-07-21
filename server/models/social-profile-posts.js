var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    postId: String,
    postOwner: String,
    body:  String,
    comments: [{ body: String, date: Date, commentOwner: String }],
  });

module.exports = mongoose.model('posts', postsSchema);