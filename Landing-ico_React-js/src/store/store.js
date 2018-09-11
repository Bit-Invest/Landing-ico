import { createStore } from 'redux';
import reducer from './reducers';

export const SHOW_POP_UP = 'SHOW_POP_UP';
export const HIDE_POP_UP = 'HIDE_POP_UP';
export const CHANGE_URL_POP_UP_VIDEO = 'CHANGE_URL_POP_UP_VIDEO';
export const SAVE_MONEY_SUCCESS = 'SAVE_MONEY_SUCCESS';
export const HIDE_DOC_POP_UP = 'HIDE_DOC_POP_UP';
export const SHOW_DOC_POP_UP = 'SHOW_DOC_POP_UP';

const initialState = {
  currentPopUp: false,
  urlPopUpVideo: '',
  money: 0,
  docPopUp: false,
  docVal: ''
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
  } else if (action.type === SHOW_DOC_POP_UP) {
    return {
      ...state,
      docPopUp: true,
      docVal: action.docVal
    }
  }
  else if (action.type === HIDE_DOC_POP_UP) {
    return {
      ...state,
      docPopUp: false
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

export const showDocPopup = (docVal) => {
  return {
    type: SHOW_DOC_POP_UP,
    docVal: docVal
  }
}


export const hideDocPopUp = () => {
  return {
    type: HIDE_DOC_POP_UP,
  }
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
