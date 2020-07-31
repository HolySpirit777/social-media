import React, { useEffect } from 'react';
import './MyPosts.css';
import axios from 'axios';

import Post from './Post/Post';
import PostSend from './Post-Send/PostSend';

const instance = axios.create({
  baseURL: 'localhost:27017'
});

const MyPosts = (props) => {
    return (
<div class="myposts card w-50">

  <div class="card-header">
    My Posts
  </div>

  <div class="card-body">

  <div>
    <PostSend />
  </div>

  <div>
    <Post />
  </div>

</div>

</div>
)
}

export default MyPosts;