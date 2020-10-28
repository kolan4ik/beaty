import React, {Component} from 'react';
import moment from "moment";

import {
  Redirect,
  withRouter,
} from 'react-router-dom'

import "./branchTime.scss"

import ruGb from 'date-fns/locale/ru';
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'moment/locale/ru';

import WidgetTop from "../WidgetTop"
import {connect} from "react-redux";
import {setTime} from "../../AC";
import {LINKS_BRANCH} from "../../links";

let timeList = [
  {
    title: "Утро",
    time: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30']
  },
  {
    title: "День",
    time: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']
  },
  {
    title: "Вечер",
    time: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
  },

];

const GetTimeList = (props) => {
  const {selectedData} = props;

  return (
    timeList.map(day => {
      return (
        <div key={day.title}>
          <div key={day} className="title">{day.title}</div>
          <div className="time-list_in">
            {
              day.time.map(time => {
                const isSelected = !!selectedData.get('time') ? selectedData.get('time').replace('.', ':') === time : false;
                return <span key={time} className={ isSelected ? 'selected' : ''} onClick={(e) => props.selectedTime(e)}>{time}</span>
              })
            }
          </div>
        </div>
      )
    })
  )
}

class BranchTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: new Date(),
      isFirst: false,
    };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleSelectedTime = this.handleSelectedTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeDay = this.changeDay.bind(this);

  }

  handleDayClick(day, {selected}) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  handleSelectedTime(e) {
    this.setState({
      isFirst: true
    })
    this.props.setTime({
      date: this.state.selectedDay,
      time: e.target.innerText,
    }, this.props.match.params.id)
  }

  handleChange(data) {
    this.setState({
      selectedDay: data
    })
  }

  changeDay(day) {
    const isDay = moment(this.state.selectedDay).add(day, 'days').toDate();
    if(moment(isDay).isAfter(new Date().getDate() - 1, 'day')){
      this.setState({
        selectedDay: isDay
      })
    }
  }

  render() {
    registerLocale('ru-gb', ruGb);

    let id = this.props.match.params.id;
    let {rec} = this.props;

    debugger;

    if (!rec.entities.size) {
      return <Redirect to="/"/>
    }

    if (this.state.isFirst) {
      return <Redirect to={LINKS_BRANCH}/>
    }


    return (<div>
        <WidgetTop isVisibleBack={true}/>
        <h1>Выбирите время</h1>

        <DatePicker
          locale="ru-gb"
          minDate={new Date()}
          selected={this.state.selectedDay}
          onChange={this.handleChange}
          popperPlacement="top-end"

        />

        <div className="nav-time">
          {
            moment(this.state.selectedDay).isAfter(new Date(), 'day') && <button onClick={e => this.changeDay(-1)} className="btn btn-prev"></button>
          }

          <div className="text">
            <p>{moment(this.state.selectedDay).format("D MMMM")}</p>
            <span>{moment(this.state.selectedDay).format('dddd')} </span>
            <p>

              {
                (moment(this.state.selectedDay).fromNow() === "несколько секунд назад") && "Сегодня"
              }

              {
                (moment(this.state.selectedDay).fromNow() !== "несколько секунд назад") && moment(this.state.selectedDay).fromNow()
              }
            </p>
          </div>
          <button onClick={e => this.changeDay(1)} className="btn btn-next"></button>

        </div>

        <div className="time-list">
          <GetTimeList selectedData={rec.entities.getIn([parseInt(id), 'date', 'entities'])} selectedTime={this.handleSelectedTime}/>
        </div>
      </div>

    );
  }
}

export default withRouter(connect((state, ownProps) => {
    return {
      rec: state.rec,
    }
  }, {setTime}, null
)(BranchTime))