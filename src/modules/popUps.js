const initialState = {
  videoShown: false,
  popUpShown: false
};

const SHOW_VIDEO = 'popUps/SHOW_VIDEO';
const HIDE_VIDEO = 'popUps/HIDE_VIDEO';

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_VIDEO:
      return {
        ...state,
        videoShown: true
      };
      break;
    case HIDE_VIDEO:
      return {
        ...state,
        videoShown: false
      };
    default:
      return state;
  }
};

export const showVideo = () => {
  return {
    type: SHOW_VIDEO
  };
};

export const hideVideo = () => {
  return {
    type: HIDE_VIDEO
  };
};
