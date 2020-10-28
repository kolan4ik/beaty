import React from 'react';


import burgerIcon from './burger.svg'

import './nav.scss'


const Nav = () => {
  return (
    <nav>
      <div className="burger">
        <img src={burgerIcon} alt=""/>
      </div>
    </nav>
  )
}


export default Nav;
