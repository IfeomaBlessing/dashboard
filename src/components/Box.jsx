import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/box.css'


const Box = (props) => {
  return (
      
       <div className="box">
           <div className="left">
                 <h3>{props.title}</h3>
             <span>{props.user}</span>
             <Link to={props.linkName} className='Boxdetail'><span>{props.detail}</span></Link>
           </div>
           <div className="right">
            <h6>{props.percent}</h6>
            <FontAwesomeIcon icon={props.boxIcon} className ="boxIcon" id={props.boxStyle} />
           </div>
       </div>

     
       
  )
}

export default Box
