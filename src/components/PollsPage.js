import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PollsNav from './PollsNav'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQuestions from './AnsweredQuestions'

function PollsPage (props) {
    return (
        <div>
            {props.loading
                ? null
                : (
                    <div>
                        <PollsNav />
                        <Route path='/polls/questions/unanswered' exact component={UnansweredQuestions} />
                        <Route path='/polls/questions/answered' exact component={AnsweredQuestions} />
                    </div>
                )
            }
        </div>
    )
}

function mapStateToProps({ logged, authedUser }){
    return {
        loading: authedUser === null,
        logged
    }
}

export default connect(mapStateToProps)(PollsPage)