import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration:"none"}}>
          <div className="logo">CyrilSocial</div>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            className="searchInput"
          />
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
            <span className="topbarIconBadge">
              <span className="topbariconBadgeArrange">1</span>
            </span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">
              <span className="topbariconBadgeArrange">222</span>
            </span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">
              <span className="topbariconBadgeArrange">2</span>
            </span>
          </div>
        </div>
        <img src="../assets/persons/1.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
