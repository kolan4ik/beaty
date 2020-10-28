import React from 'react';

import "./widgetTop.scss"

const backPage = (props) => {
  window.history.back();
}

function widgetTop(props) {
  return (
    <section className="widget-top">
      {props.isVisibleBack && <div onClick={(e) => backPage(props)} className="back"></div>}
      <div className="close"></div>
    </section>
  );
}

export default widgetTop;
