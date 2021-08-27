import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/posts/3.png" alt="" />
                            <img className="profileUserImg" src="/assets/persons/1.png" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Cyril Chukwuebuka</h4>
                            <span className="profileInfoDesc">Hello friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>
                </div>
            </div>
        </>
    )
}
