import {useContext, useState} from 'react'
import "./navbar.css"
import pix from '../../assets/mypix.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({openSidebar, toggleSidebar}) => {
  const [openProfile, setOpenProfile] =useState(false)

 const toggleProfile=()=>{
  setOpenProfile(!openProfile)
 }

  return (
    <div className={openSidebar ? "Navbar active" : "Navbar"}>
      <div className="nav-wrapper">


      <div className="input-wrapper">
        
      <div className="menu" onClick={()=>toggleSidebar()}>
        <FontAwesomeIcon icon={faBars}/>
      </div>

      <div className="search-wrapper">
        <input type="text" placeholder='Search...' />
        <FontAwesomeIcon icon={faSearch} className="searchBtn" />
      </div>

      </div>

      <div className="nav-icons">
  <div className ='nav-icon'>
  <FontAwesomeIcon icon={faBell}/>
   <span>80</span>
  </div>

  <div className ='nav-icon'>
  <FontAwesomeIcon icon={faEnvelope}/>
   <span>30</span>
  </div>
   
      <img src={pix} alt="profileImage" onClick={()=>toggleProfile()} />

      <div className={openProfile ? "sub-wrap open" : "sub-wrap"}>
        <div className="sub-wrapper">
          <div className="sub-head flex">
            <h3>Admin</h3>
            <small>Sign Out</small>
          </div>

          <div className="sub-content flex">
            <img src={pix} />
            <div className="sub-right">
              <h4>John Brown</h4>
              <small>johnbrown20@gmail.com</small>
            </div>
          </div>          
        </div>
        <hr />
 
         <div className="sub-down flex">
          <img src={pix} alt=""/>
          <small>Sign in with a different account</small>
        </div> 
      </div>
      </div>
      
      </div>

    </div>
  )
}

export default Navbar
