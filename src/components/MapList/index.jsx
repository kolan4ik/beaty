import React from 'react';
import {
  Link
} from "react-router-dom";

import WidgetTop from "../WidgetTop"

import './mapList.scss';
import mapImg from './map.png';

import {connect} from 'react-redux'
import {setAddress} from '../../AC'

function MapList(props) {
  return (
    <div>
      <WidgetTop isVisibleBack={false}/>
      <h1>Выбирите филиал</h1>

      <section className="map-list">
        <Link onClick={(e) => props.setAddress(111)} to="/branch/" className="map-item">
          <div className="preview"><img src={mapImg} alt=""/></div>
          <span className="name">Жопки-Попки Академический</span>
          ул. Анатолия Мехренцева 34
        </Link>
        <Link onClick={(e) => props.setAddress(222)} to="/branch/" className="map-item">
          <div className="preview"><img src={mapImg} alt=""/></div>
          <span className="name">Салон красоты "Ворожея" <br/> с длинным блять названием</span>
          ул. Степана Разина Колчановского 150
        </Link>
      </section>
    </div>
  );
}

export default connect(null, {setAddress}, null
)(MapList);


