import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

const makeStore = context => createStore(rootReducer);

export default createWrapper(makeStore, {debug: true});