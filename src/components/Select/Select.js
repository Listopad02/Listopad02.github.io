import React, { memo, useCallback } from 'react'
import "./Select.css"

const Select = ({ header, state, setState, unit, min, max, calculate }) => {

  const changeHandler = useCallback((e) => { 
    if (+e.target.value > +e.target.max) {
      setState(e.target.max)
    } else {
      setState(e.target.value)
    }
  }, [setState])

  const changeHandlerBlur = useCallback((e) => { 
    if (+e.target.value < +e.target.min) {
      setState(e.target.min)
    }
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
                   min={min}
                   max={max}
                   value={calculate ? calculate : state}
                   readOnly={calculate ? true : false}
                   onChange={(e) => {
                    changeHandler(e)
                   }}
                   onBlur={(e) => {
                    changeHandlerBlur(e)
                   }} />
            <p className='select-range__unit'>{ unit }</p>
            <input type="range" 
                   className="select-range__range" 
                   name="range" 
                   min={min}
                   max={max}
                   value={state}
                   onChange={(e) => changeHandler(e)} />
        </div>
    </div>
  )
}

export default memo(Select)