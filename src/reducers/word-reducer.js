export default (state = {}, action) => {
  switch (action.type){
  case "START_GAME":
    return {currentWord: randomWord()};
  default:
    return state;
  };
};

const randomWord = () => {
  const wordList = [
    {word: 'kiwi',
     hint: 'cat'
    },
    {word: 'bee',
     hint: 'handsome'
    },
    {word: 'chee',
     hint: 'keyboard'
    }
  ];
  const word = wordList[Math.floor(Math.random() * wordList.length)]
  return word;
}