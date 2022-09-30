import React, { memo, useCallback } from 'react'
import "./Select.css"

const Select = ({ header, state, setState }) => {
  const changeHandler = useCallback((e) => {
    setState(e.target.value)
  }, [setState])

  return (
    <div className='select'>
        <div className="select-title">
            <h3 className='select-header'>{ header }</h3>
        </div>
        <div className="select-range">
            <input type="number" 
                   className="select-range__number" 
                   placeholder='0'
                   onChange={(e) => changeHandler(e)} />
            <input type="range" 
                   className="select-range__range" 
                   name="range" 
                   onChange={(e) => changeHandler(e)} />
        </div>
    </div>
  )
}

export default memo(Select)