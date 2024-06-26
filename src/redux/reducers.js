import { CREATE_POST, DELETE_POST, TOGGLE_THEME } from './actions';
import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const darkMode = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  darkMode,
});
