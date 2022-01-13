import { createStore } from 'redux';
import contactsReducer from './contacts/contacts-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
