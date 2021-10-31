import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile'

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText"><b> Sinach</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => {
                        return <Online key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
          <>
            <h4 ClassName="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>

            <h4 ClassName="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/1.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/2.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/3.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/4.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/5.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}persons/6.png`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Cyril Chukwuebuka</span>
              </div>
            </div>
          </>
        );
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
