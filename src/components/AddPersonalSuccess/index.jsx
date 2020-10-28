import React from 'react';

import "./branchSyccess.scss"

import icon from "./icon.svg"

import WidgetTop from "../WidgetTop"

function AddPersonalSuccess(props) {
  props.changeBg();
  return (
    <div>
      <WidgetTop isVisibleBack={false}/>
      <div className="success-text">
        <img className="success-img" src={icon} alt=""/>
        <div className="title">{props.title}!</div>
        <p>{props.text}</p>
        <button className="btn btn-blue btn-full">{props.linkText}</button>
      </div>
    </div>
  );
}

export default AddPersonalSuccess;
