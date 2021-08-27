import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import "./post.css";
import "../../dummyData"

export default function Post({key, post, user}) {

    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)

    const likeHandler = (e) => {
        setLike(isLike? like-1 : like+1);
        setIsLike(!isLike);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={`/assets/persons/${post.id}.png`} alt="" className="postProfileImg" />
                        <span className="postUsername">{user}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
