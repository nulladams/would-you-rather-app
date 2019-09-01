import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'


/**
* @description View that shows the users scores
*/
function LeaderBoardPage ({ usersScores, logged }) {
    return (
        <div>
            <ul>
            {usersScores.map((userScore) => (
                <li key={userScore.userId}>
                    <UserCard userScore={userScore} />
                </li>    
            ))}
            </ul>
        </div>
    )
}

function mapStateToProps ({ users, logged }) {
    const usersScores = Object.values(users)
        .map((user) => ({
            questionsScore: user.questions.length,
            answersScore: Object.keys(user.answers).length,
            userId: user.id
        }))
        .map((userScore) => ({
            ...userScore,
            scoreSum: userScore.questionsScore + userScore.answersScore            
        }))
        .sort((a,b) => b.scoreSum - a.scoreSum)

    return {
        usersScores,
        logged
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)