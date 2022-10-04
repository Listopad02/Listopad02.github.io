import React, { useEffect, useCallback, memo } from 'react'
import "./Result.css"

const Result = ({ header, price, contribution, term, deal, state, setState }) => {

  const calculateValue = useCallback(() => {
    let value 
    const monthPay = Math.round((price - contribution) * ((0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1)))
    
    if (deal) {
      value = term * monthPay + contribution
    } else {
      value = Math.round((price - contribution) * ((0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1)))
    }

    return value
  }, [contribution, deal, price, term])

  useEffect(() => {
    setState(calculateValue())
  }, [calculateValue, setState])

  return (
    <div className='result'>
        <div className="result-title">
            <h3 className="result-title__header">{ header }</h3>
        </div>
        <div className="result-value">
            <p className="result-value__paragraph">
                { calculateValue().toLocaleString('ru-RU') } ₽
            </p>
        </div>
    </div>
  )
}

export default memo(Result)