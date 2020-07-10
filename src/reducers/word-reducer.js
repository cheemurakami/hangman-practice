import * as c from './../actions/ActionTypes';

export default (state = {counter: 0}, action) => {
  switch (action.type){
  case c.START_GAME:
    return {currentWord: randomWord(), counter: 0};
  case c.ADD_COUNT:
    return {counter: state.counter + 1}
  default:
    return state;
  };
};


const randomWord = () => {
  const wordList = [
    {word: ['k','i','w','i'],
     hint: 'cat'
    },
    {word: ['b','e','e'],
     hint: 'handsome'
    },
    {word: ['c','h','e','e'],
     hint: 'keyboard'
    }
  ];
  const word = wordList[Math.floor(Math.random() * wordList.length)]
  return word;
}

