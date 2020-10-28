import React, {useState} from "react";

import Select from 'react-dropdown-select'


import starIcon from "../MoneyBonus/star.png";
import {Link} from "react-router-dom";
import phoneIcon from "../MoneyBonus/phone.png";

import "./money-card.scss";
import iconBtn from "./icon.svg";

const options = [
  {value: 'val 1', label: 'Ко всем услугам и товарам'},
  {value: 'val 2', label: 'Ко всем услугам и товарам 1'},
  {value: 'val 3', label: 'Ко всем услугам и товарам 2'}
];


const MoneyBonusCash = (props) => {
  props.changeBg();
  const [isChecked, setIsChecked] = useState(true);
  const [selectedSelect, setSelected] = useState(false);

  return (
    <section className="money-page">
      <div className="page-top page-top--white">
        <i><img src={starIcon} alt=""/></i><span>Бонусная <br/> система</span>
      </div>
      <div className="money-tab">
        <ul>
          <li>
            <Link to="/money">
              Online запись
              <img src={phoneIcon} alt=""/>
            </Link>
          </li>
          <li>
            <Link to="/money/bonus" className="active">
              Бонусная система
              <img src={starIcon} alt=""/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="money_in">
        <div className="top">
          Клиенты любят бонусы. Бонусыдолжны быть комфортными для вас и клиента.
        </div>
        <div className="money-card">
          <button className="btn btn-blue"><i><img src={iconBtn} alt=""/></i> Выдать карту клиенту</button>
          <div className="money-card_toggle">
            <label onClick={e => setIsChecked(!isChecked)}>Автоматический выпуск новым клиентам</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={e => setIsChecked(!isChecked)}
              value="Автоматический выпуск новым клиентам"/>
            <span onClick={e => setIsChecked(!isChecked)}></span>
          </div>
          <div className="form-item">
            <label htmlFor="card-day">Сгорание баллов <br/> не использованных</label>
            <input type="text" id="card-day" defaultValue="0 дней"/>
          </div>
          <div className="form-item">
            <label htmlFor="card-percent">Ограничение оплаты баллами <br/> от суммы чека</label>
            <input type="text" id="card-percent" defaultValue="0 %"/>
          </div>

          <div className="form-item">
            <div className={selectedSelect ? "custom-select custom-select--selected": "custom-select" }>
              {
                selectedSelect && <label>Баллы применяются</label>

              }
              <Select
                placeholder="Баллы применяются"
                dropdownPosition="auto"
                values={[]}
                options={options}
                onChange={(values) => setSelected(values)}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MoneyBonusCash;