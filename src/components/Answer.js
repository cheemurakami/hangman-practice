import React from 'react'
import AnswerLetter from './AnswerLetter'
import PropTypes from "prop-types";

function Answer(props) {
  const underScores =  props.answerWord.map(() => {
    return <AnswerLetter />
  })
  return (
    <div>
      {underScores}
    </div>
  )
}
Answer.propTypes = {
  answerWord: PropTypes.array
}
export default Answer