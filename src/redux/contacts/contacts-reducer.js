import { combineReducers } from 'redux';
import types from './contacts-types';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.name !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
