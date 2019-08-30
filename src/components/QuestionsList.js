import React from 'react'
import { connect } from 'react-redux'
import PollCard from './PollCard'

/**
* @description List polls questions
*/
function QuestionsList (props) {
    const { questionsIds } = props
    return (
        <ul>
            {questionsIds.map((questionId) => (
                <li key={questionId}>
                    <PollCard id={questionId} cardType='info' />
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({ questions, authedUser }, { questionsStatus }) {

    let questionsIds
    if (questionsStatus === 'answered') {
        questionsIds = Object.values(questions)
            .filter((question) => (question.optionOne.votes.includes(authedUser)
                || question.optionTwo.votes.includes(authedUser)))
            .map((question) => question.id)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
    if (questionsStatus === 'unanswered') {
        questionsIds = Object.values(questions)
            .filter((question) => !question.optionOne.votes.includes(authedUser)
                && !question.optionTwo.votes.includes(authedUser))
            .map((question) => question.id)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }

    return {
        questionsIds
    }
}

export default connect(mapStateToProps)(QuestionsList)