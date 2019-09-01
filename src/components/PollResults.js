import React from 'react'
import { connect } from 'react-redux'

/**
* @description Shows the poll results for a specific question
*/
function PollResults ({ question, vote }) {
    const sumVotesOptionOne = question.optionOne.votes.length
    const sumVotesOptionTwo = question.optionTwo.votes.length
    const sumVotes = sumVotesOptionOne + sumVotesOptionTwo
    return (
        <div className='card-info'>
            <p><strong>Results</strong></p>
            <div className='results' style={{ backgroundColor: vote === 'optionOne' && '#f5f5f5' }}>
                <p>Would you rather {question.optionOne.text}</p>
                <progress value={sumVotesOptionOne} max={sumVotes} />
                <div className='votes-info'>
                    <strong className='sum-votes'>{sumVotesOptionOne} out of {sumVotes} votes</strong>
                    {vote === 'optionOne' && (
                        <div className='the-vote'>
                            <strong>Your Vote</strong>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <div className='results' style={{ backgroundColor: vote === 'optionTwo' && '#f5f5f5' }}>
                <p>Would you rather {question.optionTwo.text}</p>
                <progress value={sumVotesOptionTwo} max={sumVotes} />
                <div className='votes-info'>
                    <strong className='sum-votes'>{sumVotesOptionTwo} out of {sumVotes} votes</strong>
                    {vote === 'optionTwo' && (
                        <div className='the-vote'>
                            <strong>Your Vote</strong>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ users, questions, authedUser }, { id }){
    const question = questions[id]
    const vote = () => {
        if (question.optionOne.votes.includes(authedUser)) {
            return 'optionOne'
        }
        if (question.optionTwo.votes.includes(authedUser)) {
            return 'optionTwo'
        }
    }
    return {
        question,
        vote: vote()
    }
}

export default connect(mapStateToProps)(PollResults)