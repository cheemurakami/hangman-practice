import React from 'react'
import Key from './Key'

function Keyboard() {
  const masterLetterList = [
    'a', 
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const letters = masterLetterList.map((letter) => {
    return <Key letter={letter} />
  });

  return (

    <div>
      {letters}
    </div>
  )
}

export default Keyboard
