import React, {useState} from 'react';
import {Redirect, withRouter,Link} from "react-router-dom";

import WidgetTop from "../WidgetTop"

import "./branchPersonal.scss"

import photo1 from './photo.png'
import {connect} from "react-redux";
import {setPersonal} from "../../AC";

import {LINKS_BRANCH, LINKS_HOME} from '../../links'

const SearchService = (handle) => {
  return <form className='search-services'>
    <input onChange={e => handle.handleFilter(e)} type="search"/>
    <button className="btn btn-submit"></button>
  </form>
};

const personaState = [
  {
    id: 1,
    photo: {photo1},
    name: "Бурунова Мария",
    pos: "Мастер по бровям",
    popular: "",
    time: ['12.00', '13.00', '15.30', '18.00', '20.00']
  },
  {
    id: 2,
    photo: {photo1},
    name: "Вурунова Мария",
    pos: "Мастер по бровям",
    popular: "",
    time: ['12.00', '13.00', '15.30', '18.00', '20.00']
  }
]

function BranchPersonal(props) {
  const [personalList, setPersonalList] = useState(personaState);
  const [isFirst, setIsFirst] = useState(false);

  if (!props.rec.entities.size) {
    return <Redirect to={LINKS_HOME}/>
  }
  if (isFirst) {
    return <Redirect to={LINKS_BRANCH}/>
  }
  let id = props.match.params.id;
  const isPersonal = props.rec.entities.getIn([parseInt(id), 'personal', 'entities'])

  function filterList(e) {
    const targetText = e.target.value;
    const newPersonalList = personaState.filter(item => {
      console.log(item.name.toLowerCase().indexOf(targetText.toLowerCase()) > -1)
      return item.name.toLowerCase().indexOf(targetText.toLowerCase()) > -1
    });

    setPersonalList(newPersonalList)
  }

  return (
    <div>
      <WidgetTop isVisibleBack={true}/>
      <h1>Выбирите сотрудника</h1>
      <SearchService handleFilter={e => filterList(e)}/>
      <button onClick={(e) => window.history.back()} className="btn btn-dark">Пропустить выбор сотрудника</button>
      <section className="persona-list">
        {
          personalList.map(user => {
            return (
              <div key={user.id} className="personal-item">
                <i className="icon-comments"></i>
                <div className="photo"><img src={user.photo.photo1} alt=""/></div>
                <div className="center">
                  <Link onClick={(e) => {
                    return (
                      props.setPersonal({
                        id: user.id,
                        name: user.name,
                        time: false,
                      }, id)
                    )
                  }} to={`/branch/${id}/time`} className="name">{user.name}</Link>
                  <div className="pos">{user.pos}</div>
                  <div className="star-list">
                    ★★★★★ <div className="comments">(340 отзывов)</div>
                  </div>
                </div>
                <div className="time">
                  {
                    user.time.map(time => {
                      const hasClass = !!isPersonal ? isPersonal.time === time && isPersonal.id === user.id : false;
                      return <span className={hasClass ? "selected" : ""} onClick={(e) => {
                        setIsFirst(true)
                        return (
                          props.setPersonal({
                            id: user.id,
                            name: user.name,
                            time: e.target.innerText,
                          }, id)
                      )
                      }} key={time}>{time}</span>
                    })
                  }
                </div>

              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default withRouter(connect((state, ownProps) => {
    return {
      rec: state.rec,
    }
  }, {setPersonal}, null
)(BranchPersonal));

