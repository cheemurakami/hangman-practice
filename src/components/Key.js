import React from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';


function Key(props) {
  const letterClick = () => {
    const { dispatch } = props;
    const action = a.addCount();
    dispatch(action);
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



Key = connect()(Key);
export default Key
