import React from 'react';
import "./money.scss";

import {
  Link,
} from "react-router-dom";

import phoneIcon from "./phone.png";
import starIcon from "./star.png";
import linkIcon from "./link.svg";
import icon2 from "./icon.png";

function Money(props) {
  props.changeBg();
  return (
    <section className="money-page">
      <div className="page-top page-top--white">
        <i><img src={phoneIcon} alt=""/></i><span>Online запись</span>

      </div>
      <div className="money-tab">
        <ul>
          <li>
            <Link to="/money" className="active">
              Online запись
              <img src={phoneIcon} alt=""/>
            </Link>
          </li>
          <li>
            <Link to="/money/bonus">
              Бонусная система
              <img src={starIcon} alt=""/>
            </Link>

          </li>
        </ul>
      </div>
      <div className="money_in">
        <div className="top">
          Используйте эти ссылки для сайтов или вставьте в instagram, или вышлите клиенту. И он сам сможет записаться.
          <button className="btn-blue btn btn-add"></button>
        </div>
        <div className="money_list">
          <ul>
            <li>
              <Link to="https://n52911.yclients.com/">
                <i className='icon'><img src={linkIcon} alt=""/></i>
                <p><b>Основная online запись</b>
                  <span>https://n52911.yclients.com/</span>
                </p>
                <i><img src={icon2} alt=""/></i>
              </Link>
            </li>
            <li>
              <Link to="https://n52911.yclients.com/">
                <i className='icon'><img src={linkIcon} alt=""/></i>
                <p>Только услуги
                  <br/><b>Косметология</b>
                  <span>https://n52911.yclients.com/</span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="https://n52911.yclients.com/">
                <i className='icon'><img src={linkIcon} alt=""/></i>
                <p>Только мастер
                  <br/><b>Хуйкина Алена</b>
                  <span>https://n52911.yclients.com/</span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Money;