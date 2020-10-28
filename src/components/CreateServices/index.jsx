import React from "react";
import {
  Link,
} from "react-router-dom";

import "./style.scss";

function CreateServices(props) {
  props.changeBg();

  return (
    <div>
      <section className="create-services">
        <p>Это обычная услуга? <br/>
          Одно время один клиент.</p>
        <p>
          Или групповая? <br/>
          Например, обучение нескольких клиентов в одно время.
        </p>

        <div className="create-services_btn-group">
          <Link to="create-services/step1/" className="btn btn-empty">Групповая</Link>
          <Link to="create-services/step1/" className="btn btn-blue">Обычная</Link>
        </div>
      </section>
    </div>
  )
}

export default CreateServices;