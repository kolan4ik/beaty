//import axios from 'axios'
import {
  SUCCESS,
  SET_ADDRESS,
  GET_SERVICER,
  DELETE_SERVICE,
  DELETE_SERVICES,
  SET_TIME,
  REMOVE_TIME,
  SET_PERSONAL,
  REMOVE_PERSONAL,
  REMOVE_REGISTRATION,
  ADD_REGISTRATION,
} from '../constants'

export function setAddress(address) {
  return (dispatch) => {
    dispatch({
      type: SET_ADDRESS + SUCCESS,
      payload: {address},
      generateId: true
    })
  }
}

export function setServicesList(services, idRec) {
  return (dispatch) => {
    dispatch({
      type: GET_SERVICER + SUCCESS,
      payload: {services, idRec}
    })
  }
}

export function removeService(id, idRec) {
  return (dispatch) => {
    dispatch({
      type: DELETE_SERVICE + SUCCESS,
      payload: {id, idRec}
    })
  }
}

export function removeAllServicesList(idRec) {
  return (dispatch) => {
    dispatch({
      type: DELETE_SERVICES + SUCCESS,
      payload: {idRec}
    })
  }
}

export function setTime(data, idRec) {
  return (dispatch) => {
    dispatch({
      type: SET_TIME + SUCCESS,
      payload: {data, idRec}
    })
  }
}

export function setPersonal(data, idRec) {
  return (dispatch) => {
    dispatch({
      type: SET_PERSONAL + SUCCESS,
      payload: {data, idRec}
    })
  }
}

export function removePersonal(idRec) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PERSONAL + SUCCESS,
      payload: {idRec}
    })
  }
}

export function removeTime(idRec) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_TIME + SUCCESS,
      payload: {idRec}
    })
  }
}

export function addRegistration() {
  return (dispatch) => {
    dispatch({
      type: ADD_REGISTRATION + SUCCESS,
      generateId: true
    })
  }
}

export function removeRegistration(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_REGISTRATION + SUCCESS,
      payload: {id}
    })
  }
}