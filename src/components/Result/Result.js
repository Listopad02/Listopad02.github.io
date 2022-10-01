import React from 'react'
import "./Result.css"

const Result = ({ header, price, contribution, term, month, deal }) => {
  const dealAmount = term * month + contribution
  const monthPay = Math.round((price - contribution) * ((0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1)))

  return (
    <div className='result'>
        <div className="result-title">
            <h3 className="result-title__header">{ header }</h3>
        </div>
        <div className="result-value">
            <p className="result-value__paragraph">
                { deal ? dealAmount : monthPay } ₽
            </p>
        </div>
    </div>
  )
}

export default Result