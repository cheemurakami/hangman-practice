import wordReducer from '../../reducers/word-reducer';

describe('wordReducer', () => {
  let action;
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    action = {type:null}
    expect(wordReducer({}, action)).toEqual({});
  })

  test('Should return random word obj', () => {
    action = {type: "START_GAME"}
    expect(wordReducer({}, action)).not.toBe({});
  })
});