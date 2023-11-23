
import './employees.css'
import Table from '../../components/Table'


const Employees = () => {

  return (
    <div>
      
      <div className='home'>
    
      
        <div className="home-content">
       <div className="header">
       <h2>List Of Employees</h2>
       <button>Add New Employee</button>
       </div>
        <table>
          <thead>
           <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Department</td>
            <td>Employment Status</td>
            <td>Action</td>
           </tr>
           </thead>
          <Table
          tableName ="Ifeoma Obodozie"
          tableStatus ="Active"
          tableEmail ="ifeoma.jib@gmail.com"
          tableDept ="Sales"/>

<Table
          tableName ="Ifeoma Obodozie"
          tableStatus ="Active"
          tableEmail ="ifeoma.jib@gmail.com"
          tableDept ="Admin"/>

<Table
          tableName ="Omob"
          tableStatus ="Not-active"
          tableEmail ="omojuis@gmail.com"
          tableDept ="Opertions"/>
          
          <Table
          tableName ="Ifeoma Obodozie"
          tableStatus ="Active"
          tableEmail ="ifeoma.jib@gmail.com"
          tableDept ="Sales"/>
          <Table
          tableName ="Cynthia James"
          tableStatus ="Suspension"
          tableEmail ="iynthis.jib@gmail.com"
          tableDept ="HR"/>

<Table
          tableName ="Ifeoma Obodozie"
          tableStatus ="Active"
          tableEmail ="ifeoma.jib@gmail.com"
          tableDept ="Sales"/>

<Table
          tableName ="Ifeoma Obodozie"
          tableStatus ="Active"
          tableEmail ="ifeoma.jib@gmail.com"
          tableDept ="Sales"/>

<Table
          tableName ="Dotun Mike"
          tableStatus ="Active"
          tableEmail ="onoChi@gmail.com"
          tableDept ="IT"/>

<Table
          tableName ="Rita Charles"
          tableStatus ="Not-active"
          tableEmail ="ichi@gmail.com"
          tableDept ="Sales"/>
</table>
    
        </div>
        </div>
    </div>
  
  )
}

export default Employees
