const Profile = require('../models/social-profile');
const Posts = require('../models/social-profile-posts');


//Post

getAllPosts = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

getMyPosts = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

createPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

deletePost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

editPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

addCommentToPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

deleteCommentPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

editCommentPost = (req, res) => {
    const body = req.body;

    const post = new Posts(body);

}

//Profile

getProfile = (req, res) => {

    const body = req.body;


}

getMyProfile = (req, res) => {

    Profile.findOne({ profileId : req.params.id}, function (err, profile) {
        if(err) {
            console.log(err);
        } else {
            res.json(profile);
        }
    });
}

createProfile = (req, res) => {

    const body = req.body;


}

deleteProfile = (req, res) => {

    const body = req.body;


}

editProfile = (req, res) => {

    const body = req.body;


}

module.exports = {
    getAllPosts,
    getMyPosts,
    createPost,
    deletePost,
    editPost,
    addCommentToPost,
    deleteCommentPost,
    editCommentPost,
    getProfile,
    getMyProfile,
    createProfile,
    deleteProfile,
    editProfile
}