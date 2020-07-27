const express = require('express');

const Social = require('../controllers/social-controllers');

const router = express.Router();

router.post('/profile', Social.createProfile);
router.post('/post', Social.createPost);
router.post('/comment/:id', Social.addCommentToPost);

router.put('/profile/:id', Social.editProfile);
router.put('/post/:id', Social.editPost);
router.put('/post/:id', Social.editCommentPost);

router.get('/posts', Social.getAllPosts);
router.get('/posts/:id', Social.getMyPosts);
router.get('/profile/:id', Social.getProfile);
router.get('/myself/:id', Social.getMyProfile);

router.delete('/post/:id', Social.deletePost);
router.delete('/post/:id', Social.deleteCommentPost);
router.delete('/post/:id', Social.deleteProfile);

module.exports = router;
