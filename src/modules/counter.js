export const SET_WH = 'montain/SET_WH';

const initialState = {
  mountain: {
    w: 0,
    h: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WH:
      return {
        ...state,
        mountain: {
          ...state.mountain,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export const set_wh_mountain = arr => {
  return dispatch => {
    dispatch({
      type: SET_WH,
      payload: arr
    });
  };
};
