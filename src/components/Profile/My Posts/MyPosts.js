import React from 'react';
import './MyPosts.css';

const MyPosts = (props) => {
    return (
<div class="myposts card w-50">
  <div class="card-header">
    My Posts
  </div>
  <div class="card-body">

  <div class="myposts-post border w-auto input-group input-group-sm w-75">

   <span class="myposts-post-text">Post what you want</span>
  <input type="text" class="myposts-post-input form-control" />
  <button type="button" class="btn btn-outline-success btn-sm">Post</button>
  </div>

</div>

</div>
    )
}

export default MyPosts;