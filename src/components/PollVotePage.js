import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PollCard from './PollCard'


/**
* @description View where the user can vote/answer for a specific question
*/
function PollVotePage (props) {
    const { id } = props.match.params
    const { userVotes } = props
    const hasVoted = userVotes.includes(id)

    if (hasVoted) {
        return <Redirect to='/polls/questions/answered' />
    }

    return (
        <div>
            <PollCard id={id} cardType='vote' />
        </div>
    )
}

function mapStateToProps({ users, authedUser }){
    const userVotes = Object.keys(users[authedUser].answers)
    return {
        userVotes
    }
}

export default connect(mapStateToProps)(PollVotePage)