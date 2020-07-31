import React from 'react';
import './PostSend.css'

const PostSend = (props) => {

    return (
        <div>
            <div class="post-send card">
                <div className="card-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Post what you want" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary btn-outline-success" type="button">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostSend;