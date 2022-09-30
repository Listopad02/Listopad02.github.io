import React from 'react'
import "./Select.css"

const Select = ({ header }) => {
  return (
    <div className='select'>
        <div className="select-title">
            <h3 className='select-header'>{ header }</h3>
        </div>
        <div className="select-range">
            <input type="number" className="select-range__number" placeholder='300' />
            <input type="range" className="select-range__range" name="range" />
        </div>
    </div>
  )
}

export default Select