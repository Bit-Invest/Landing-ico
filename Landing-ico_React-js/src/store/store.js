import { createStore } from 'redux';
import reducer from './reducers';

export const SHOW_POP_UP = 'SHOW_POP_UP';
export const HIDE_POP_UP = 'HIDE_POP_UP';

const initialState = {
  currentPopUp: false
};


export function switchPopUp(state = initialState, action) {
  if (action.type === SHOW_POP_UP) {
    return {
      ...state,
      state: action.payload
    }
  }
  else if (action.type === HIDE_POP_UP) {
    return {
      ...state,
      state: action.payload
    }
  }
}

export const showPopUp = (state = initialState, data) => {
  return {
    type: SHOW_POP_UP,
    payload: {
      currentPopUp: true,
    }
  };
}

export const hidePopUp = (state = initialState, data) => {
  return {
    type: HIDE_POP_UP,
    payload: {
      currentPopUp: false,
    }
  };
}

export const store = createStore(switchPopUp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
