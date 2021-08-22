import React from 'react'
import { MoreVert } from '@material-ui/icons';
import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/persons/1.png" alt="" className="postProfileImg" />
                        <span className="postUsername">Cyril Chukwuebuka</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey!, it's my first post :)</span>
                    <img src="/assets/persons/1.png" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/posts/like.png" alt="" className="likeIcon" />
                        <img src="/assets/posts/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
