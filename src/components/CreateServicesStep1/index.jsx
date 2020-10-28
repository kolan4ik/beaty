import React, {useState} from "react";
import {
  useHistory,
} from "react-router-dom";


function CreateServicesStep1(props) {
  let history = useHistory();

  const [personalName, setPersonalName] = useState(false);
  const [personalCash, setPersonalCash] = useState();
  const [personalTime, setPersonaTime] = useState(false);

  const isValid = !!personalName && !!personalCash && !!personalTime;

  props.changeBg();


  const changeCash = (e) => {
    const valToState = e.target.value.replace('₽', '');
    if(valToState.length){
      setPersonalCash(valToState + '₽');
    }
    else{
      setPersonalCash(valToState );
    }
  }

  return (
    <div>
      <section className="create-services create-services--height">
        <form onSubmit={e => {
          if (isValid)
            history.push('/create-services/step2/');
          e.preventDefault();
        }} action="">
          <div className={`form-item ${(!!personalName) ? 'valid' : ''}`}>
            <textarea id="name" onChange={e => setPersonalName(e.target.value)}></textarea>
            <label htmlFor="name">Название услуги</label>
          </div>
          <div className={`form-item ${(!!personalCash) ? 'valid' : ''}`}>
            <input value={personalCash} type="text" id="cash" onChange={e => changeCash(e)}/>
            <label htmlFor="cash">Цена</label>
          </div>
          <div className={`form-item ${(!!personalTime) ? 'valid' : ''}`}>
            <input type="text" id="time" onChange={e => setPersonaTime(e.target.value)}/>
            <label htmlFor="time">Время услуги</label>
          </div>

          <button className="btn btn-blue">Далее</button>
        </form>

      </section>
    </div>
  )
}

export default CreateServicesStep1;