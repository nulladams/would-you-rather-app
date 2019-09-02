import React from 'react'
import { connect } from 'react-redux'
import PollInfo from './PollInfo'
import PollVoteOptions from './PollVoteOptions'
import PollResults from './PollResults'


/**
* @description Shows basic information about polls questions
*/
function PollCard ({ question, author, authedUser, cardType }) {

    if (question === null) {
        return <p>This question doesn't exist</p>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                {(cardType === 'results') 
                    ? <span>Asked by {author.name}:</span>
                    : <span>{author.name} asks:</span>
                }
            </div>
            <div className="card-content">
                <img 
                    src={author.avatarURL}
                    alt=""
                    className='avatar'
                />
                {cardType === 'info' && (
                    <PollInfo id={question.id} />
                )}
                {cardType === 'vote' && (
                    <PollVoteOptions id={question.id} />
                )}
                {cardType === 'results' && (
                    <PollResults id={question.id}/>
                )}
            </div>
        </div>
    )
}

function mapStateToProps ({ questions, users, authedUser }, { id, cardType }) {
    let question = questions[id]
    let author = users[question.author]
    return {
        question,
        author,
        authedUser,
        cardType
    }
}

export default connect(mapStateToProps)(PollCard)