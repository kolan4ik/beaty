import {SET_ADDRESS, SUCCESS} from '../constants.js'
import {OrderedMap, Record} from "immutable";
import {arrToMap} from "../helper";
import {
  DELETE_SERVICE,
  DELETE_SERVICES,
  GET_SERVICER,
  REMOVE_PERSONAL,
  SET_TIME,
  REMOVE_TIME,
  SET_PERSONAL,
  ADD_REGISTRATION,
  REMOVE_REGISTRATION
} from "../constants";

const ServicesListChoiceRecord = Record({
  id: null,
  name: null,
  cash: null,
  time: null
});

const recRecord = Record({
  id: null,
  address: null,
  servicesList: new Record({
    entities: new ServicesListChoiceRecord(),
    isLoaded: false
  }),
  personal: new Record({
    entities: new OrderedMap({
      id: null,
      name: null,
      time: null,
    }),
    isLoaded: false
  }),
  date: new Record({
    entities: new Record({}),
    isLoaded: false
  })
});

const recState = Record({
  entities: arrToMap([], new recRecord()),
  isLoaded: false
});

const defaultState = new recState();


export default (state = defaultState, action) => {
  const {type, payload, randomId} = action;
  switch (type) {
    case SET_ADDRESS + SUCCESS: // TODO: address
      return state
        .setIn(['entities', parseInt(randomId), 'id'], parseInt(randomId))
        .setIn(['entities', parseInt(randomId), 'address'], payload.address)
    case ADD_REGISTRATION + SUCCESS:
      return state
        .setIn(['entities', parseInt(randomId), 'id'], parseInt(randomId))
    case REMOVE_REGISTRATION + SUCCESS:
      return state
        .deleteIn(['entities', payload.id]);

    case GET_SERVICER + SUCCESS: // TODO: services
      return state
        .setIn(['entities', parseInt(payload.idRec), 'servicesList', 'entities', payload.services.id],
          new ServicesListChoiceRecord({
            ...payload.services,
          }))
        .setIn(['entities', parseInt(payload.idRec), 'servicesList', 'isLoaded'], true)
    case DELETE_SERVICES + SUCCESS:
      return state
        .setIn(['entities', parseInt(payload.idRec), 'servicesList', 'entities'],
          new OrderedMap({}))
        .setIn(['entities', parseInt(payload.idRec), 'servicesList', 'isLoaded'], false)
    case DELETE_SERVICE + SUCCESS:
      return state
        .deleteIn(['entities', parseInt(payload.idRec), 'servicesList', 'entities', payload.id])
        .setIn(['entities', parseInt(payload.idRec), 'servicesList', 'isLoaded'], state.getIn(['entities', parseInt(action.payload.idRec), 'servicesList', 'entities']).size > 1)
    case SET_PERSONAL + SUCCESS: // TODO: PERSONAL
      return state
        .setIn(['entities', parseInt(payload.idRec), 'personal', 'entities'], payload.data)
        .setIn(['entities', parseInt(payload.idRec), 'personal', 'isLoaded'], true)
        .setIn(['entities', parseInt(payload.idRec), 'date', 'entities'], new OrderedMap({
          date: new Date(),
          time: payload.data.time,
        }))
        .setIn(['entities', parseInt(payload.idRec), 'date', 'isLoaded'], true);

    case REMOVE_PERSONAL + SUCCESS:
      return state
        .setIn(['entities', parseInt(payload.idRec), 'personal', 'entities'], new OrderedMap({
          id: null,
          name: null,
          time: null,
        }))
        .setIn(['entities', parseInt(payload.idRec), 'personal', 'isLoaded'], false)

        .setIn(['entities', parseInt(payload.idRec), 'date', 'entities'], new Record({}))
        .setIn(['entities', parseInt(payload.idRec), 'date', 'isLoaded'], false)

    case SET_TIME + SUCCESS:  // TODO: TIME
      return state
        .setIn(['entities', parseInt(payload.idRec), 'date', 'entities'], new OrderedMap({
          date: payload.data.date,
          time: payload.data.time,
        }))
        .setIn(['entities', parseInt(payload.idRec), 'date', 'isLoaded'], true)
    case REMOVE_TIME + SUCCESS:
      return state
        .setIn(['entities', parseInt(payload.idRec), 'date', 'entities'], new Record({}))
        .setIn(['entities', parseInt(payload.idRec), 'date', 'isLoaded'], false)
    default:
      return state;
  }
}
