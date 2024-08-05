import {Link} from 'react-router-dom'
import { GiTwirlyFlower } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { RiSettings3Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {FaSearch} from "react-icons/fa";
import './index.css'

const Header = props => {
  
  return (
    <nav className="nav-header">
          <Link to="/">
          <GiTwirlyFlower className="icon-style"/>
          </Link>
          <div className="search-nav-menu">
          <div className="search-bar">
            <FaSearch  className="search-icon"/>
            <input type="text" placeholder="Search..." />
          </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
              <CiMail />
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
              <RiSettings3Line />
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
              <IoMdNotificationsOutline />
               
              </Link>
            </li>
            <li className="nav-menu-item nav-menu-item1">
              <Link to="/" className="nav-link">
              <CgProfile />
               
              </Link>
            </li>
            
          </ul>
          </div>
    </nav>
  )
}

export default Header
