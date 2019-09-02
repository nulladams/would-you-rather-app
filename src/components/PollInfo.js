import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestionToGuess } from '../utils/helpers'

/**
* @description Shows some information about answered and unanswered questions
*/
function PollInfo ({ shortQuestion, questionId, hasVoted, location }) {
    	return(
        	<div className='card-info'>
				<p>Would you Rather...</p>
				<p>{shortQuestion}</p>
				<div className='center-btn'>
				{hasVoted
                ? (<Link to={`/question/${questionId}/results`}>
					<button className='btn-card'>View Poll</button>
				  </Link>)
				: (<Link to={{ pathname: `/question/${questionId}`, state: { from: location }}}>
					<button className='btn-card'>View Poll</button>
				  </Link>)
				}
				</div>
			</div>
        )
}

function mapStateToProps({ users, questions, authedUser }, { id }) {

    const question = questions[id]

	const hasVoted = question.optionOne.votes.includes(authedUser)
					 || question.optionTwo.votes.includes(authedUser)

	return {
		questionId: question.id,
		shortQuestion: formatQuestionToGuess(question.optionOne.text),
		hasVoted
	}
}

export default withRouter(connect(mapStateToProps)(PollInfo))