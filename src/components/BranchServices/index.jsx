import React, {useState} from 'react';
import {
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

import "./branchServices.scss"
import serviceImg from "./services-img.png";

import WidgetTop from "../WidgetTop"

import {connect} from 'react-redux'
import {setServicesList, removeService} from '../../AC'
import {mapToArr} from '../../helper'

const servicesLIst = [
  {
    title: "Наращивание ресниц",
    id: 1,
    servicesIn: [
      {
        id: 10,
        img: "",
        name: "Акция голени+ глубокое ваще бикини + подмышки (для мужчин)",
        cash: "12 000 ₽",
        time: "60 мин"
      },
      {
        id: 11,
        img: {serviceImg},
        name: "Лазерная эпиляция",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 12,
        img: "",
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 13,
        img: "",
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      }
    ]
  },
  {
    title: "Лазерная эпиляция",
    id: 2,
    servicesIn: [
      {
        id: 1,
        img: {serviceImg},
        name: "Акция голени+ глубокое ваще бикини + подмышки (для мужчин)",
        cash: "12 000 ₽",
        time: "60 мин"
      },
      {
        id: 2,
        img: "",
        name: "Лазерная эпиляция",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 3,
        img: "",
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 4,
        img: "",
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      }
    ]
  },
  {
    title: "Лазерная эпиляция",
    id: 3,
    servicesIn: [
      {
        id: 5,

        img: "",
        name: "Наращивание бровей",
        cash: "12 000 ₽",
        time: "60 мин"
      },
      {
        id: 6,

        img: "",
        name: "Лазерная эпиляция",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 7,

        img: "",
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      },
      {
        id: 8,
        img: {serviceImg},
        name: "Глубокое ваще бикини",
        cash: "12 000 ₽",
        time: "15 мин"
      }
    ]
  }
];

const SearchService = (handle) => {
  return <form className='search-services'>
    <input onChange={e => handle.handleFilter(e)} type="search"/>
    <button className="btn btn-submit"></button>
  </form>
};


const BranchServiceList = (props) => {
  return props.arr.map(item => {
    return <div key={item.id} onClick={(e) => props.changeActive(item.id)} className="branch-service_item">
      <div className={props.activeId.indexOf(item.id) >= 0 ? "title active" : "title"}>{item.title}</div>
      {
        props.activeId.indexOf(item.id) >= 0 && <div className="drop">
          <table>
            {
              item.servicesIn.map(services => {
                return (
                  <tbody onClick={(e) => props.setServicesList(services, parseInt(props.idRec))} key={services.id}>
                  {
                    services.img !== "" && <tr className="row-img">
                      <td><img src={services.img.serviceImg} alt=""/></td>
                      <td></td>
                    </tr>
                  }
                  <tr>
                    <td>
                      <div className="name">{services.name}</div>
                    </td>
                    <td>
                      <div className="cash">{services.cash}</div>
                      <div className="time">{services.time}</div>
                    </td>
                  </tr>
                  </tbody>
                )
              })
            }
          </table>
        </div>
      }
    </div>
  })
};

function BranchServices(props) {
  const [servicesList, setServicesList] = useState(servicesLIst);
  const [activeIdArr, setActiveIdArr] = useState([servicesLIst[0].id]);


  function filterList(e) {
    const targetText = e.target.value;
    const newServiceList = servicesLIst.filter(item => {
      return item.title.toLowerCase().indexOf(targetText.toLowerCase()) > -1
    });
    setServicesList(newServiceList)
    if(!newServiceList.length){
      setActiveIdArr(activeIdArr => [] )
    }
    else{
      setActiveIdArr(activeIdArr => [newServiceList[0].id] )
    }
  }

  if (!props.rec.entities.size) {
    return <Redirect to="/"/>
  }

  const {rec} = props;

  let id = props.match.params.id;


  const toggleItem = (item) => {
    if (activeIdArr.indexOf(item) > -1) {
      const newArr = activeIdArr;
      newArr.splice(newArr.indexOf(item), 1);
      setActiveIdArr(activeIdArr => [...newArr]);
    } else {
      setActiveIdArr(activeIdArr => [...activeIdArr, item]);
    }
  }
  return (
    <div>
      <WidgetTop isVisibleBack={true}/>
      <h1>Выбирите услугу</h1>

      {rec.entities.getIn([parseInt(id), 'servicesList', 'isLoaded']) && <section className="service-active">
        <table>
          {mapToArr(rec.entities.getIn([parseInt(id), 'servicesList', 'entities'])).map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="name">{item.name}</div>
                </td>
                <td>
                  <i onClick={(e) => props.removeService(item.id, id)} className="icon-remove"></i>
                  <div className="cash">{item.cash}</div>
                  <div className="time">{item.time}</div>
                </td>
              </tr>
            )
          })}
        </table>
        <Link to="/branch/" className="btn btn-white">Продолжить</Link>
      </section>}


      <SearchService handleFilter={e => filterList(e)}/>
      <section className="branch-service-list">
        <BranchServiceList activeId={activeIdArr} changeActive={toggleItem} setServicesList={props.setServicesList} idRec={id} arr={servicesList}/>
      </section>
    </div>
  );
}

export default withRouter(connect((state, ownProps) => {
  return {
    rec: state.rec
  }
}, {setServicesList, removeService}, null)(BranchServices));