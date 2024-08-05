import {Link} from 'react-router-dom'
import { CiMail } from "react-icons/ci";
import { RiSettings3Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import './index.css'

const Header = props => {
  
  return (
    <nav className="tabs-header"> 
          <ul className="tabs-menu">
            <li className="tabs-menu-item current-tab">
              <Link to="/" className="tabs-link">
              <CiMail />
              </Link>
            </li>

            <li className="tabs-menu-item">
              <Link to="/" className="tabs-link">
              <RiSettings3Line />
              </Link>
            </li>

            <li className="tabs-menu-item">
              <Link to="/" className="tabs-link">
              <IoMdNotificationsOutline />
               
              </Link>
            </li>
            <li className="tabs-menu-item">
              <Link to="/" className="tabs-link">
              <CgProfile />
               
              </Link>
            </li>
            
          </ul>
    </nav>
   
  )
}

export default Header
