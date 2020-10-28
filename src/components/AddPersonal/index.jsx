import React, {useState} from "react";
import {
  useHistory,
} from "react-router-dom";

import Select from 'react-dropdown-select'


import "./addPersonal.scss";

import photo from "./photo.png";

const options = [
  {value: 'Женский', label: 'Ж'},
  {value: 'Мужской', label: 'М'},
];

function AddPersonal(props) {
  props.changeBg();

  const [selectedSelect, setSelected] = useState(options[0]);

  const [personalName, setPersonalName] = useState(false);
  const [personalTel, setPersonalTel] = useState(false);
  const [personalEmail, setPersonaEmail] = useState(false);
  const [personalDate, setPersonalDate] = useState(false);

  const isValid = !!personalTel && !!personalName && !!personalEmail && !!personalDate;

  let history = useHistory();



  return (
    <section className="add-personal">
      <div className="photo"><img src={photo} alt=""/></div>
      <form onSubmit={ e => {
        if (isValid)
          history.push('/addPersonal/position')
        e.preventDefault();
      }} action="">
        <div className={`form-item ${(!!personalName) ? 'valid' : ''}`}>
          <input type="text" id="name" onChange={e => setPersonalName(e.target.value)}/>
          <label htmlFor="name">Имя</label>
        </div>
        <div className={`form-item ${(!!personalTel) ? 'valid' : ''}`}>
          <input type="text" id="tel" onChange={e => setPersonalTel(e.target.value)}/>
          <label htmlFor="tel">Телефон</label>
        </div>
        <div className={`form-item ${(!!personalEmail) ? 'valid' : ''}`}>
          <input type="email" id="email" onChange={e => setPersonaEmail(e.target.value)}/>
          <label htmlFor="email">email</label>
        </div>

        <div className="row">
          <div className="col col2x">
            <div className={`form-item ${(!!personalDate) ? 'valid' : ''}`}>
              <input type="text" id="date" onChange={e => setPersonalDate(e.target.value)}/>
              <label htmlFor="date">День рождения</label>
            </div>
          </div>

          <div className="col">
            <div className="form-item custom-select">
              <Select
                dropdownPosition="auto"
                values={[selectedSelect]}
                options={options}
                onChange={values => setSelected(values)}
              />
              <label>Пол</label>
            </div>
          </div>
        </div>
        <button className="btn btn-blue">Далее</button>
      </form>
    </section>
  )
}

export default AddPersonal;