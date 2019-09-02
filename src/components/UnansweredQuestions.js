import React from 'react'
import QuestionsList from './QuestionsList'


/**
* @description List unanswered questions
*/
function UnansweredQuestions () {
    return (
        <div>
            <QuestionsList questionsStatus='unanswered' />
        </div>
    )
}

export default UnansweredQuestions