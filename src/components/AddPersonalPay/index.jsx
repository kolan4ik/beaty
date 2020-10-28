import React from "react";
import {
  Link,
} from "react-router-dom";

import "./style.scss";

import photo from "./photo.png";
import icon from "./icon.png";


function AppPersonalPosition(props) {
  props.changeBg();
  return (
    <div>
      <div className="personal-info">
        <div className="photo"><img src={photo} alt=""/></div>
        <div className="name">Сунькина Валя</div>
      </div>
      <section className="add-personal--position">

        <p>Как вы договорились?</p>
        <p>Зарплата будет начислятся только согласно этой схеме.</p>
        <p>Сделайте это внимательно, так как деньги очень щепетильный вопрос.</p>
        <button className="btn btn-blue btn-full"><i className="icon"><img src={icon} alt=""/></i>Укажите схему начисления зарплаты</button>
        <div className="add-personal--position_bottom">
          <Link className="btn btn-empty" to='/addPersonal/success'>
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