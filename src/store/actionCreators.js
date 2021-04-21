import * as actionTypes from './actionTypes';

export const shakeTheTree = () => {
  return {
    type: actionTypes.SHAKE_THE_TREE,
  };
};

export const stopTheTree = () => {
  return {
    type: actionTypes.STOP_THE_TREE,
  };
};

export const dropTheApples = () => {
  return {
    type: actionTypes.DROP_THE_APPLES,
  };
};

export const startShakingTheTree = () => {
  return dispatch => {
    dispatch(shakeTheTree());
    setTimeout(() => {
      dispatch(stopTheTree());
      dispatch(dropTheApples());
    }, 3000);
  };
};
