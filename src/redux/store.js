import { loadState, saveState } from '../localStorage';
import { configureStore } from '@reduxjs/toolkit';
import responseReducer from './reducers';

const preloadedState = loadState();
const store = configureStore({ reducer: responseReducer, preloadedState });

store.subscribe(() => {
  saveState({ responseList: store.getState().responseList });
});

export default store;
