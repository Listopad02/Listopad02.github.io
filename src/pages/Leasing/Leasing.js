import React from 'react'
import Select from '../../components/Select/Select'
import Result from '../../components/Result/Result'
import "./Leasing.css"

const Leasing = () => {
  return (
    <div>
        <div className="leasing-title">
            <h1 className='leasing-title__header'>
              Рассчитайте стоимость автомобиля в лизинг
            </h1>

            <div className="leasing-inputs">
              <div className="leasing-inputs__container">
                <Select header="Стоимость автомобиля">
                </Select>
                <Result header="Сумма договора лизинга" result='4 467 313 ' />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Первоначальный взнос">
                </Select>
                <Result header="Ежемесячный платеж от" result='114 455 ' />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Срок лизинга">
                </Select>
                <button className="leasing-inputs__container-button">Оставить заявку</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Leasing