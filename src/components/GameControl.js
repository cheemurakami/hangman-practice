import React from 'react'
// import WordList from './WordList'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


function GameControl(props) {

  const handleClick = () => {
    const { dispatch } = props;
    console.log(props)
    const action = {
      type: "START_GAME"
    }
    dispatch(action);
  }
  return (
    <React.Fragment>
      {props.currentWord && props.currentWord.word}
      <button onClick = {handleClick}>start</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    currentWord: state.currentWord //{word:'kiwi', hint:'cat'}
  }
}

GameControl = connect(mapStateToProps)(GameControl);
GameControl.propTypes = {
  currentWord: PropTypes.object
};
export default GameControl
