import React from 'react';
import './MyPosts.css';

const MyPosts = (props) => {
    return (
<div class="myposts card w-50">
  <div class="card-header">
    My Posts
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
    )
}

export default MyPosts;