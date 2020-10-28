import React from 'react';

import "./branchSyccess.scss"

import icon from "./icon.svg"

import WidgetTop from "../WidgetTop"

function BranchSuccess() {
  return (
    <div>
      <WidgetTop isVisibleBack={true}/>
      <h1>Запись создана!</h1>
      <img className="success-img" src={icon} alt=""/>
      <form className="success-more" action="">
        <textarea placeholder="Напишите ваше пожелание перед процедурой"></textarea>
        <button className="btn btn-green">Сохранить</button>
      </form>

    </div>
  );
}

export default BranchSuccess;
