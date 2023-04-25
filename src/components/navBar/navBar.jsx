import "./navBar.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonIcon from "@mui/icons-material/Person";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>socialsite</span>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <HomeRoundedIcon />
        </Link>
        {darkMode ? (
          <WbSunnyIcon onClick={toggle} />
        ) : (
          <DarkModeIcon onClick={toggle} />
        )}
        <GridViewSharpIcon />
        <div className="search">
          <SearchSharpIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <EmailRoundedIcon />
        <NotificationsActiveSharpIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
