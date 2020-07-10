import React from 'react'
import Answer from './Answer'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Keyboard from "./Keyboard";
import * as a from './../actions';


function GameControl(props) {

  const handleClick = () => {
    const { dispatch } = props;
    //console.log(props)
    const action = a.startGame()
    dispatch(action);
  }
  return (
    <React.Fragment>
      {props.currentWord && <Answer answerWord = {props.currentWord.word}/> }

      <button onClick = {handleClick}>start</button>
      <p>{props.counter}</p>
      <Keyboard />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    currentWord: state.currentWord, //{word:'kiwi', hint:'cat'}
    counter: state.counter
  }
}

GameControl = connect(mapStateToProps)(GameControl);
GameControl.propTypes = {
  currentWord: PropTypes.object
};

export default GameControl
