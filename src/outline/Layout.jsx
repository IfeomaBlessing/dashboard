import {useState} from 'react'
import './layout.css'
import {Routes ,Route} from "react-router-dom"
import Home from '../pages/dashboard/Home'
import Employees from '../pages/employees/Employees'
import Navbar from '../components/nav/Navbar';
import Sidebar from '../components/sidebar/Sidebar'
// import { MenuContext } from '../components/context/MenuContext'

const Layout = () => {
    // const {menuBar} = useContext(MenuContext);
 const [openSidebar, setOpenSidebar] =useState(false)

 const toggleSidebar=()=>{
  setOpenSidebar(!openSidebar)
 }
  return (
    <div className="container">
    <Sidebar 
     openSidebar={openSidebar}/>


<div className = {openSidebar ? "mini-container active" : "mini-container"}>
    <Navbar
    openSidebar={openSidebar}
    toggleSidebar={toggleSidebar}/>

    <div className="layout-content">
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/Employees' element ={<Employees/>}/>
    </Routes>

    </div>

</div>
</div>
  );
}

export default Layout;
