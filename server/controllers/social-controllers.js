const Profile = require('../models/social-profile');
const Posts = require('../models/social-profile-posts');

createPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}