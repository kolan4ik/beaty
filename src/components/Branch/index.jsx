import React, {useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";

import WidgetTop from "../WidgetTop"

import icon1 from "./nav1.svg"
import icon2 from "./nav2.svg"
import icon3 from "./nav3.svg"

import "./branch.scss"

import moment from "moment";
import 'moment/locale/ru';

import {connect} from 'react-redux'
import {
  addRegistration,
  removeAllServicesList,
  removePersonal,
  removeRegistration,
  removeTime,
  setAddress,
} from '../../AC'
import {mapToArr} from "../../helper";
import {LINKS_BRANCH_SUCCESS, LINKS_HOME} from "../../links"



let showBtn = true;
let showForm = false;


const BottomForm = () => {
  const [nameForm, setName] = useState(null);
  const [telForm, setTel] = useState(null);
  let history = useHistory();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (!!nameForm && !!telForm) {
        history.push(`${LINKS_BRANCH_SUCCESS}`)
      }
    }} className="send-form" action="">
      <input type="text" required onChange={(e) => setName(e.target.value)} placeholder="Имя"/>
      <input type="text" required onChange={(e) => setTel(e.target.value)} placeholder="Телефон"/>
      <button className="btn btn-full btn-green">Записаться</button>
    </form>
  )
}

const BottomPage = (props) => {
  const {rec} = props;
  return <div className="bottom-page">
    {
      rec.entities.size > 1 &&
      <div>
        <button onClick={(e) => props.openForm()} className="btn btn-blue btn-full">Оформить визит</button>
      </div>
    }

    {
      rec.entities.size === 1 && showForm &&
      <BottomForm/>
    }

    {
      rec.entities.size > 1 && showForm && props.isOpenPopup && <div className="popup-form">
        <i onClick={(e) => props.openForm()} className="icon-close"></i>
        <BottomForm/>
      </div>
    }

  </div>
}

const ShowBtnAdd = (props) => {
  mapToArr(props.rec.entities).forEach(item => {
    showBtn = !!item.getIn(['date', 'isLoaded']) && !!item.getIn(['servicesList', 'isLoaded']) && !!item.getIn(['personal', 'isLoaded']);
  });
  return showBtn ?
    <button onClick={(e) => props.addRegistration()} className="btn btn-white btn-full">+ Добавить еще запись</button> : ""
};

function Branch(props) {

  const lastActive = !localStorage.getItem('activeIdArr') ? []: localStorage.getItem('activeIdArr').split(',').map((item) => parseInt(item))


  const [activeIdArr, setActiveIdArr] = useState(lastActive);
  const [isOpenPopup, setIsOpenPopup] = useState(false);


  const {rec} = props;

  if (!rec.entities.size) {
    return <Redirect to={LINKS_HOME}/>
  }

  let dateLoad = true;
  let personalLoad = true;
  let servicesLoad = true;

  rec.entities.forEach(item => {
    dateLoad = dateLoad && item.getIn(['date', 'isLoaded']);
    servicesLoad = dateLoad && item.getIn(['servicesList', 'isLoaded']);
    personalLoad = dateLoad && item.getIn(['personal', 'isLoaded']);
  });

  showForm = dateLoad && servicesLoad && personalLoad;


  const toggleItem = (item) => {
    if (activeIdArr.indexOf(item.get('id')) > -1) {
      const newArr = activeIdArr;
      newArr.splice(newArr.indexOf(item.get('id')), 1);
      setActiveIdArr(activeIdArr => [...newArr]);
      localStorage.setItem('activeIdArr', [...newArr]);
    } else {
      setActiveIdArr(activeIdArr => [...activeIdArr, item.get('id')]);
      localStorage.setItem('activeIdArr', [...activeIdArr, item.get('id')]);

    }

  };

  debugger;
  return (
    <div>
      <WidgetTop isVisibleBack={true}/>
      <section className={(showForm && rec.entities.size === 1) ? "branch-nav branch-nav_bottom" : "branch-nav"}>
        {
          mapToArr(rec.entities).map((item, i) => {
            debugger;

            const toggleList = rec.entities.size > 1 ? activeIdArr.indexOf(item.get('id')) >= 0 : true;
            return <div className={rec.entities.size > 1 ? "has-more" : ""} key={item.get('id')}>
              {
                rec.entities.size > 1 && <div className="reg-top">
                  <p onClick={() => toggleItem(item)} className="title-nav">Запись {i + 1}</p>
                  <span onClick={() => toggleItem(item)} className={activeIdArr.indexOf(item.get('id')) >= 0 ? "accordion-arr active" : "accordion-arr"}></span>
                  <i onClick={e => props.removeRegistration(item.get('id'))} className="icon-clear"></i>
                </div>
              }

               { toggleList &&
                <ul>
                  <li>
                    <Link className={item.getIn(['servicesList', 'isLoaded']) ? 'hide-arr' : ''} to={`/branch/${item.get('id')}/services`}>
                      <i><img src={icon1} alt=""/></i>
                      <div>
                        Услуга
                        <div>
                          {item.getIn(['servicesList', 'isLoaded']) &&
                          <div>
                            <div className="small-list">
                              {
                                mapToArr(item.getIn(['servicesList', 'entities'])).map(services => {
                                  return <div key={services.get('id')} className="name">{services.get('name')}</div>
                                })
                              }

                            </div>
                            <i className="icon-add"></i>
                          </div>
                          }
                        </div>

                      </div>
                    </Link>

                    {item.getIn(['servicesList', 'isLoaded']) &&
                    <i onClick={(e) => props.removeAllServicesList(item.get('id'))} className="icon-clear"></i>
                    }

                  </li>
                  <li>
                    <Link className={item.getIn(['personal', 'isLoaded']) ? 'hide-arr' : ''} to={`/branch/${item.get('id')}/personal`}>
                      <i><img src={icon2} alt=""/></i>
                      <div>
                        Сотрудник
                        {
                          item.getIn(['personal', 'isLoaded']) && <div>
                            <div className="small-list">
                              <div className="name">{item.getIn(['personal', 'entities']).name}</div>
                            </div>
                          </div>
                        }

                      </div>
                    </Link>
                    {
                      item.getIn(['personal', 'isLoaded']) && (
                        <i onClick={(e) => props.removePersonal(item.get('id'))} className="icon-clear"></i>
                      )
                    }
                  </li>

                  {
                    item.getIn(['date', 'isLoaded']) && <li>
                      <Link className={item.getIn(['date', 'isLoaded']) ? 'hide-arr' : ''} to={`/branch/${item.get('id')}/time`}>
                        <i><img src={icon3} alt=""/></i>
                        <div>
                          Время
                          {
                            item.getIn(['date', 'isLoaded']) && <div>
                              <div className="small-list">
                                <div className="name">{moment(item.getIn(['date', 'entities', 'date'])).format("D MMMM")} в {item.getIn(['date', 'entities', 'time'])}</div>
                              </div>
                            </div>
                          }
                        </div>
                      </Link>
                      {
                        item.getIn(['date', 'isLoaded']) && (
                          <i onClick={(e) => props.removeTime(item.get('id'))} className="icon-clear"></i>
                        )
                      }
                    </li>
                  }

                </ul>
              }

            </div>
          })
        }

        <ShowBtnAdd rec={props.rec} addRegistration={e => props.addRegistration()}/>

      </section>

      <BottomPage rec={props.rec} openForm={(e) => setIsOpenPopup(!isOpenPopup)} isOpenPopup={isOpenPopup}/>
    </div>
  );
}

export default connect((state) => {
    return {
      rec: state.rec,
    }
  }, {
    setAddress,
    removeAllServicesList,
    removePersonal,
    removeTime,
    addRegistration,
    removeRegistration,
  }, null
)(Branch);