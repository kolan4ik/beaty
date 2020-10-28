import React from "react";

import "./style.scss";


function TopBack(props) {
  return (
    <section className="add-personal_top">
      <button onClick={(e) => window.history.back()} className="btn back"></button>
      <div className="title">{props.title}</div>
    </section>

  )
}

export default TopBack;