import React from "react";
import {Link} from "react-router-dom";

import icon from './icon.png'

function CreateServicesStep3(props) {
  props.changeBg();


  return (
    <div>
      <section className="create-services create-services--height has-bottom">
        <p>Для контроля качества. Нужно чтобы мастера говорили точно как именно они реализовали услугу.</p>

        <button className="btn btn-blue btn-full btn-big"><i className="icon"><img src={icon} alt=""/></i> Укажите сотрудников</button>

        <div className="create-services_btn-group">
          <Link to="/create-services/step5/" className="btn btn-empty">Пропустить</Link>
          <Link to="/create-services/step5/" className="btn btn-blue">Сохранить</Link>
        </div>
      </section>
    </div>
  )
}

export default CreateServicesStep3;