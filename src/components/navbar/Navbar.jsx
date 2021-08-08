import "./navbar.scss"
import { ArrowDropDown,Notifications,Search } from "@material-ui/icons"
import { useState } from "react";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
               <span>Branda</span>
               <span>Series</span>
               <span>Film</span>
               <span>Baru dan Popular</span>
               <span>list Film</span>
               </div>
               <div className="rigth">
                <Search className="icon"/>
                <span>Kid</span>
                <Notifications className="icon"/>
               <img src="https://wallpaperaccess.com/full/13189.jpg" alt="" />
              <div className="profile">
               <ArrowDropDown className="icon"/>
               <div className="options">
                   <span>Settings</span>
                   <span>Logout</span>
               </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar
