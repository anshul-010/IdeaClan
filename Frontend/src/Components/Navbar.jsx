import "../App.css";
import { useState } from "react";
import barger from "../Images/menu-bar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
        <div>
          <Link to='/'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Dashboard
          </span></Link>
        </div>
        <div>
          <Link to='/lactures'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Lactures
          </span></Link>
        </div>
        <div>
        <Link to='/courses'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Courses
          </span></Link>
        </div>
        <div>
        <Link to='/register'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Register
          </span></Link>
        </div>
        <div>
        <Link to='/login'><span onClick={() => setIsNavOpen(true)}>{isAuth?"Logout":"Login"}</span></Link>
        </div>
        <div>
        <Link to='/profile'><span onClick={() => setIsNavOpen(true)}>Profile</span></Link>
        </div>
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        <img src={barger} alt="" />
      </div>
    </div>
  );
};
