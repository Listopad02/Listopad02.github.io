import React, { useState } from 'react'
import Select from '../../components/Select/Select'
import Result from '../../components/Result/Result'
import "./Leasing.css"

const Leasing = () => {
  const [price, setPrice] = useState(1000000)
  const [contribution, setСontribution] = useState(10)
  const [term, setTerm] = useState(1)
  const initialFee = Math.round(contribution / 100 * price)

  return (
    <div>
        <div className="leasing-title">
            <h1 className='leasing-title__header'>
              Рассчитайте стоимость автомобиля в лизинг
            </h1>

            <div className="leasing-inputs">
              <div className="leasing-inputs__container">
                <Select header="Стоимость автомобиля" 
                        state={price} 
                        setState={setPrice} 
                        unit="₽"
                        min={1000000}
                        max={6000000}
                        step={100000}
                        calculate={false} />
                <Result header="Сумма договора лизинга"
                        price={price}
                        contribution={initialFee}
                        term={term}
                        deal={true} />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Первоначальный взнос" 
                        state={contribution} 
                        setState={setСontribution}
                        unit={contribution + "%"}
                        min={10}
                        max={60}
                        calculate={initialFee} />
                <Result header="Ежемесячный платеж от"
                        price={price}
                        contribution={initialFee}
                        term={term}
                        deal={false} />
              </div>

              <div className="leasing-inputs__container">
                <Select header="Срок лизинга" 
                        state={term} 
                        setState={setTerm} 
                        unit="мес." 
                        min={1}
                        max={60}
                        step={1}
                        calculate={false} />
                <button className="leasing-inputs__container-button">Оставить заявку</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Leasing