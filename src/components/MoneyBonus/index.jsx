import React from 'react';
import "./money.scss";

import {
  Link,
} from "react-router-dom";

import phoneIcon from "./phone.png";
import starIcon from "./star.png";

function MoneyBonus (props) {
  props.changeBg();
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
          Клиенты любят бонусы.  Бонусыдолжны быть комфортными для вас и клиента.
          <button className="btn-blue btn btn-add"></button>
        </div>
        <div className="money_list">
          <ul>
            <li>
              <Link to="/money/bonus/cart">
                <p><b>Стандартная карта</b></p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default MoneyBonus;