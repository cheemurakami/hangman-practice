import * as c from './../../actions/ActionTypes';
import * as a from './../../actions/index';

describe ("game actions", () => {
  it ('startGame should create START_GAME action', () => {
    expect(a.startGame()).toEqual(
      {type: c.START_GAME}
    )
  })
})