import React, { useState } from 'react'
import Select from '../../components/Select/Select'
import Result from '../../components/Result/Result'
import "./Leasing.css"

const Leasing = () => {
  const [price, setPrice] = useState(0)
  const [contribution, setСontribution] = useState(0)
  const [term, setTerm] = useState(0)
  const [summ, setSumm] = useState(0)
  const [month, setMonth] = useState(0)

  return (
    <div>
        <div className="leasing-title">
            <h1 className='leasing-title__header'>
              Рассчитайте стоимость автомобиля в лизинг
            </h1>

            <div className="leasing-inputs">
              <div className="leasing-inputs__container">
                <Select header="Стоимость автомобиля" state={price} setState={setPrice} />
                <Result header="Сумма договора лизинга" result={summ} />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Первоначальный взнос" state={contribution} setState={setСontribution} />
                <Result header="Ежемесячный платеж от" result={month} />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Срок лизинга" state={term} setState={setTerm} />
                <button className="leasing-inputs__container-button">Оставить заявку</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Leasing