import React from 'react'

export default function Spending() {
  return (
    <div className='spending-container'>
        
        <p>Spending - Last 7 Days</p>
        
        <div className='chart-container'>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>mon</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>tue</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>wed</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>thu</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>fri</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>sat</p>
          </div>
          
          <div className='day-container'>
            <div className='chart-container'></div>
            <p>sun</p>
          </div>
        </div>
        
        <div className='month-container'>
            <div className='month-container-left'>
                <p className='month-p1'></p>
                <p className='month-p2'></p>
            </div>
            <div className='month-container-right'>
                <p className='month-p3'></p>
                <p className='month-p4'></p>
            </div>
        </div>

    </div>
  )
}
