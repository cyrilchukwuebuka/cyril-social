import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import "./feed.css";
import { Posts, Users } from "../../dummyData"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p)=>{
                    return <Post key={p.id} post={p} user={Users[`${p.id}` - 1].username} />
                })}
            </div>
        </div>
    )
}
