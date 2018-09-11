import { createStore } from 'redux';
import reducer from './reducers';

export const SHOW_POP_UP = 'SHOW_POP_UP';
export const HIDE_POP_UP = 'HIDE_POP_UP';
export const CHANGE_URL_POP_UP_VIDEO = 'CHANGE_URL_POP_UP_VIDEO';
export const SAVE_MONEY_SUCCESS = 'SAVE_MONEY_SUCCESS';

const initialState = {
  currentPopUp: false,
  urlPopUpVideo: '',
  money: 0
};

export function switchPopUp(state = initialState, action) {
  if (action.type === SHOW_POP_UP) {
    return {
      ...state,
      currentPopUp: true
    }
  }
  else if (action.type === HIDE_POP_UP) {
    return {
      ...state,
      currentPopUp: false
    }
  } else if (action.type === CHANGE_URL_POP_UP_VIDEO) {
    return {
      ...state,
      urlPopUpVideo: action.payload.urlPopUpVideo
    }
  } else if (action.type === SAVE_MONEY_SUCCESS) {
    return {
      ...state,
      money: action.money
    }
  }
}

export const showPopUp = (state = initialState, action) => {
  return {
    type: SHOW_POP_UP,
    payload: {
      currentPopUp: true,
    }
  };
}

export const hidePopUp = (state = initialState, action) => {
  return {
    type: HIDE_POP_UP,
    payload: {
      currentPopUp: false,
    }
  };
}

export const changeUrlPopupVideo = (url) => {
  return {
    type: CHANGE_URL_POP_UP_VIDEO,
    payload: {
      urlPopUpVideo: url
    }
  }
}

export const saveMoney = money => {
  return {
    type: SAVE_MONEY_SUCCESS, 
    money: money
  }
}

export const store = createStore(switchPopUp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
