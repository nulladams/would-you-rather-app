import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

/**
* @description List answered questions
*/
function AnsweredQuestions () {
    return (
        <div>
            <QuestionsList questionsStatus='answered' />
        </div>
    )
}

export default connect()(AnsweredQuestions)