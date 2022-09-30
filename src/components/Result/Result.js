import React from 'react'
import "./Result.css"

const Result = ({ header, result }) => {
  return (
    <div className='result'>
        <div className="result-title">
            <h3 className="result-title__header">{ header }</h3>
        </div>
        <div className="result-value">
            <p className="result-value__paragraph">
                { result } ₽
            </p>
        </div>
    </div>
  )
}

export default Result