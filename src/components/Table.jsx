import React from 'react'
import image from '../assets/mypix.jpg'

const Table = (props) => {
  return (
    <>
           <tbody>
             <tr>
                   <td className="person-details">
                   <img src={image} alt="profileImage" className='profile'/>
                       <h5>{props.tableName}</h5>
                   </td>
               
               <td> <h4>{props.tableEmail}</h4></td>
               <td> <h4>{props.tableDept}</h4></td>

               <td> <h4>{props.tableStatus}</h4></td>

               <td>
                <button className='view'>View</button>
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
               </td>
               </tr>
           </tbody>
    </>
  )
}

export default Table
