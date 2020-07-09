import wordReducer from '../../reducers/word-reducer';

describe('wordReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(wordReducer({}, {type:null})).toEqual({});
  })
});