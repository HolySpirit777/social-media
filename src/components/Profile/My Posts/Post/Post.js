import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-body">
                <p class="card-text">Mi vida es mejor hoy que manana</p>
                </div>
                <div class="card-footer text-muted">
                <input className="form-control" placeholder="Write a comment" type="text"/>
                </div>
                </div>
        </div>
    )
}

export default Post;

