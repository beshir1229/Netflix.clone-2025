import React from 'react'
import "./header.css"
import Netflix from "../../Assets/Images/Netflix.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className='header_outer_container'>
    <div className='header_container'>
    <div className='header_left'>
    <ul>
        <li> <img src={Netflix} alt='Netflix logo' width="100"></img></li>
        <li>Netflix</li>
        <li>Home</li>
        <li>TVShows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>MyList</li>
        <li>Browse by Languages</li>
    </ul>

    </div>
    <div className='header_right'>
    <ul>
    <li><SearchIcon/></li>
    <li><NotificationsNoneIcon/></li>
    <li><AccountBoxIcon/></li>
    <li><ArrowDropDownIcon/></li>
    </ul>



    </div>

    </div>
    </div>
  )
}

export default Header


// useEffect(() => {
  
//   const handleScroll = () => {
  
//     if (window.scrollY > 0) {
//       setIsScrolled(true); // user has scrolled down
//     } else {
//       setIsScrolled(false); // user is at the very top
//     }
//   };
//      window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// ${isScrolled ? "header_black" : ""}
// const [isScrolled, setIsScrolled] = useState(false);