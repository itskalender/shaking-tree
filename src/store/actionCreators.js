// I use actionCreators with react-thunk to execute asynchronous code.

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

export const collectTheApples = id => {
  return {
    type: actionTypes.COLLECT_THE_APPLES,
    id: id,
  };
};

export const startCollectingTheApples = (id, collectingDelay) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(collectTheApples(id));
    }, collectingDelay * 1000);
  };
};
