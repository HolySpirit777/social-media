const express = require('express');

const Social = require('../controllers/social-controllers');

const router = express.Router();

router.post('/profile', Social.createProfile);
router.post('/post', Social.createPost);
router.post('/comment', Social.addCommentToPost);

router.put('/profile/:id', Social.editProfile);

