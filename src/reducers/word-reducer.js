import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type){
  case c.START_GAME:
    return {currentWord: randomWord()};
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