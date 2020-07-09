import React from 'react'
import PropTypes from "prop-types";


function Key(props) {
  return (
    <button className='key'>
      {props.letter}
    </button>
  )
}

Key.propTypes = {
  letter: PropTypes.string
}
export default Key
