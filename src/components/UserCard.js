import React from 'react'
import{ connect } from 'react-redux'

/**
* @description Component that shows scores information for a specific user
*/
function UserCard ({ user, userScore }) {
    return (
        <div className='card-content'>
            <img 
                src={user.avatarURL}
                alt=''
                className='avatar'
            />
            <div className='score-card'>
                <div className='card-info'>
                    <div>
                        <p>Answered Questions: {userScore.answersScore}</p>
                        <p>Created Questions: {userScore.questionsScore}</p>
                    </div>
                </div>
                <div className='score-info-card'>
                    <div className='score-box'>
                        <div className='score-box-title'>Score</div>
                        <div className='score-body'>
                            <div className='score-value'>
                                <span>{userScore.scoreSum}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps ({ users }, { userScore }) {
    const user = users[userScore.userId]

    return {
        user,
        userScore
    }
}

export default connect(mapStateToProps)(UserCard)