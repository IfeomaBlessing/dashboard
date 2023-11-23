import {useContext} from 'react'
import {Sidelinks} from '../sidebar/Sidelinks' 
import {Link} from 'react-router-dom'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuContext } from '../context/MenuContext';


const Sidebar = ({openSidebar}) => {
  // const {menuBar} = useContext(MenuContext);
  return (
    <div className={openSidebar ? "sidebar active" : "sidebar"}>

      <div className='logo'>
        <h4>ADMIN</h4>
      </div>
      
       <ul>
        {Sidelinks.map((x)=>(

                <li>
                    <Link to={x.to}>
                     <FontAwesomeIcon icon={x.icon} className ="icons" />
                    <span> {x.Name} </span>
                   </Link>
                </li>
            
        ))}
       </ul>
    
    </div>
  )
}

export default Sidebar;