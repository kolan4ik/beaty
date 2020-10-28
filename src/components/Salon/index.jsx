import React from 'react';
import './Salon.scss';
import imgHeader from './header_cabinet.png';
import salonImg1 from './salon-img1.png';
import salonImg2 from './salon-img2.png';
import salonImg3 from './salon-img3.png';
import salonImg4 from './salon-img4.png';


const salonList = [
  {
    id: 1,
    img: salonImg1,
    url: '1',
    name: 'Жопки-Попки Академический',
    address: 'ул. Анатолия Мехренцева 34',
  },
  {
    id: 2,
    img: salonImg2,
    url: '2',
    name: 'Салон красоты Ворожея с длинным блять названием',
    address: 'ул. Степана Разина Колчановского 150',
  },
  {
    id: 3,
    img: salonImg3,
    url: '3',
    name: 'Варадеро',
    address: 'ул. Ленина34',
  }
];
const salonList2 = [
  {
    id: 4,
    img: salonImg4,
    url: '4',
    name: 'Салон Ахуительной красоты',
    address: 'ул. Ленина34',
  }
];

const SalonList = (salonArr) => {
  return salonList.map(salon => {
    return (
      <div className="salon-item" key={salon.id}>
        <a href={salon.url}>
          <span className="preview"><img src={salon.img} alt=""/></span>
          <span className="name">{salon.name}</span>
          <span className="address">{salon.address}</span>
        </a>
      </div>
    )
  })
}

const Salon = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header_logo">
          <img src={imgHeader} alt=""/>
        </div>
      </header>

      <section className="salon-list">
        <h1 className="title">Ваши салоны</h1>
        <div className="salon-list_in">
          <SalonList salons={salonList}/>
          <div className="salon-item salon-item--add">
            <a href='/#'>
              +
            </a>
          </div>
        </div>
        <h1 className="title">Доступные салоны </h1>
        <SalonList salons={salonList2}/>
      </section>
    </div>
  );
}

export default Salon;
