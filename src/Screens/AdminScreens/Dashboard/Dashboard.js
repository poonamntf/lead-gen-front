import React from 'react'
import "./dashboard.css"
import Card from '../../../components/HomeCompo/Card'
import Chart from '../../../components/HomeCompo/Chart'
const Dashboard = () => {
  return (
    <>


    
    <div className='mt-5 row'>
    
   <Card/>
           
    </div>
    <div className='row'>
     <Chart />
     </div>
    

    </>
    
  )
}

export default Dashboard