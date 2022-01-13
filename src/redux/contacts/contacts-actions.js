import types from './contacts-types';
import { nanoid } from 'nanoid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

const deleteContact = name => ({
  type: types.DELETE,
  payload: name,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, filter };

export default actions;
