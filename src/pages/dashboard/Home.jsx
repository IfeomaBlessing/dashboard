import {  faMoneyBillWave, faPeopleGroup, faPersonBiking } from '@fortawesome/free-solid-svg-icons'

import Box from '../../components/Box'
import Chart from '../../components/Chart'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>

          <h2>Dashboard</h2>
        <div className="boxes">
        <Box
        title ="Employees"
        user ="12"
        detail ="See All Employees"
        percent = "+2% "
        boxIcon = {faPeopleGroup}
        linkName = "/Employees"/>
        
        <Box
        title ="Delieveries"
        user ="300"
        detail ="View All Deliveries"
        percent = "+2% "
        linkName = "/Deliveries"
        boxIcon ={faPersonBiking}/>

<Box
        title ="Earnings"
        user ="$5.85k"
        detail ="View All Earnings"
        percent = "+2% "
        linkName = "/Stats"
        boxIcon = {faMoneyBillWave}/>
        </div>

        

        <div className="charts">
          <Chart/>
        </div>
        </div>
      
    
    
  )
}

export default Home;
