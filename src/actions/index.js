import * as c from './../actions/ActionTypes';

// will be used in GameControl for dispatch
export const startGame = () => (
  {type: c.START_GAME}
);
export const addCount = () => (
  {type: c.ADD_COUNT}
);