import React from 'react'


export default function Spending() {

function showDetails(e) {
  e.target.style.visibility = "visible";
}


  return (
    <div className='spending-container'>
        
        <p className='spending-seven'>Spending - Last 7 Days</p>
        
        <div className='chart-container'>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>mon</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>tue</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>wed</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>thu</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>fri</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>sat</p>
          </div>
          
          <div className='day-container'>
            <div className='money-detail'></div>
            <div className='money-container'></div>
            <p>sun</p>
          </div>
        </div>
        
        <div className='month-container'>
            <div className='month-container-left'>
                <p className='month-p1'>Total this month</p>
                <p className='month-p2'>$478.33</p>
            </div>
            <div className='month-container-right'>
                <p className='month-p3'>+2.4%</p>
                <p className='month-p4'>from last month</p>
            </div>
        </div>

    </div>
  )
}
