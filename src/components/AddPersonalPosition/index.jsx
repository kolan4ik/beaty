import React from "react";
import {
  Link,
} from "react-router-dom";

import "./style.scss";

import photo from "./photo.png";
import icon from "./icon.png";


function AppPersonalPosition(props) {
  props.changeBg()

  return (
    <div>
      <div className="personal-info">
        <div className="photo"><img src={photo} alt=""/></div>
        <div className="name">Сунькина Валя</div>
      </div>
      <section className="add-personal--position">
        <p>Какая должность у сотрудника?</p>
        <p>Это нужно чтобы легко присвоить услуги.</p>
        <p>Но на самом деле, чтобы не дать лишних возможностей в программе.</p>
        <button className="btn btn-blue btn-full"><i className="icon"><img src={icon} alt=""/></i>Укажите должность</button>
        <div className="add-personal--position_bottom">
          <Link className="btn btn-empty" to='/addPersonal/pay'>
            Пропустить
          </Link>
          <Link className="btn btn-blue" to='/addPersonal/success'>
            Сохранить
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AppPersonalPosition;