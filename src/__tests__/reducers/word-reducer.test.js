import wordReducer from '../../reducers/word-reducer';
import * as c from '../../actions/ActionTypes';

describe('wordReducer', () => {
  let action;
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    action = {type:null}
    expect(wordReducer({}, action)).toEqual({});
  })

  test('Should return random word obj', () => {
    action = {type: c.START_GAME}
    expect(wordReducer({}, action)).not.toEqual({});
  })

  test('Should add 1 to counter', () => {
    action = {type: c.ADD_COUNT}
    expect(wordReducer({counter: 0, currentWord: "kiwi"}, action)).toEqual({counter: 1, currentWord: "kiwi"});
  })
});