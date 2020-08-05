import React, { useEffect, useState } from 'react';
import './PostSend.css';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
  });

const PostSend = (props) => {

    const [post, setPost] = useState('');

    function postHandler(event) {

        setPost(event.target.value);

    }

    function sendPost() {

        console.log(post);
        setPost('');

        instance.post('/post', {
            post: post
        })

    }

    return (
        <div>
            <div class="post-send card">
                <div className="card-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Post what you want" value={post} onChange={e => postHandler(e)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary btn-outline-success" type="button" onClick={sendPost}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostSend;