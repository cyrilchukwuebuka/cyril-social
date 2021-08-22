import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <div className="logo">CyrilSocial</div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder='Search for friends, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">
                            <span className='topbariconBadgeArrange'>2</span>
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="../assets/persons/1.png" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
