import "../App.css";
import { useState } from "react";
import barger from "../Images/menu-bar.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
export const AdminNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const dispatch = useDispatch()

  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function handleLogout(){
    setIsNavOpen(true)
    logout(dispatch)
  }


  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
        <div>
          <Link to='/admin-dashboard'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
          Courses
          </span></Link>
        </div>
        <div>
        <Link to='/admin-schedulelacture'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Schedule Lacture
          </span></Link>
        </div>
        <div>
        <Link to='/admin-addcourses'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Add Courses
          </span></Link>
        </div>
        <div>
          <Link to='/admin-addlactures'><span className="nav-link" onClick={() => setIsNavOpen(true)}>
            Users
          </span></Link>
        </div>
        
        <div>
        <Link><span onClick={handleLogout}>{isAuth?"Logout":"Login"}</span></Link>
        </div>
        <div>
        <Link ><span onClick={() => setIsNavOpen(true)}>Profile</span></Link>
        </div>
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        <img src={barger} alt="" />
      </div>
    </div>
  );
};
