import React, { memo, useCallback } from 'react'
import "./Select.css"

const Select = ({ header, state, setState, unit, min, max, calculate, step, disabled, setDisabled }) => {

  const changeHandler = useCallback((e) => { 
    if (+e.target.value > +e.target.max) {
      setState(e.target.max)
    } else if (+e.target.value <= 0) {
      setState(e.target.min)
    } else {
      setState(e.target.value)
    }
  }, [setState])

  const changeHandlerBlur = useCallback((e) => { 
    if (+e.target.value < +e.target.min) {
      setState(e.target.min)
    }
  }, [setState])

  const defineClassName = () => {
    let className = 'select-range__unit'

    if (disabled) className += ' disabled'
    else if (calculate) className += ' calculate'

    return className
  }

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
                   disabled={disabled}
                   onChange={(e) => {
                    changeHandler(e)
                   }}
                   onBlur={(e) => {
                    changeHandlerBlur(e)
                    if (disabled) setDisabled(false)
                   }} />
            <div className={defineClassName()} disabled={disabled} calculate={calculate}>{ unit }</div>
            <input type="range" 
                   className="select-range__range" 
                   name="range" 
                   min={min}
                   max={max}
                   step={step ? step : 1}
                   value={state}
                   disabled={disabled}
                   onChange={(e) => changeHandler(e)} />
        </div>
    </div>
  )
}

export default memo(Select)