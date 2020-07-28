var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    profileId: String,
    fullName:  String,
    following: [String],
    followers: [String],
    biography: String,
    description: String,
    comments: [{ body: String, date: Date }],
    reactions: {
      interested: Number
    }
  });

module.exports = mongoose.model('profile', profileSchema, 'profile');
