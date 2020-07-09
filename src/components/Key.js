import React from 'react'
import PropTypes from "prop-types";


function Key(props) {
  const letterClick = () => {
    console.log(`${props.letter} is clicked`)
  }

  return (
    <button onClick={letterClick} className='key'>
      {props.letter}
    </button>
  )
}

Key.propTypes = {
  letter: PropTypes.string
}
export default Key
