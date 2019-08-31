import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestionAnswer } from '../actions/shared'

/**
* @description Shows the questions options for the user to vote
* @constructor
*/
class PollVoteOptions extends Component {
    state = {
        answer: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { answer } = this.state
        const { dispatch, question, authedUser } = this.props

        dispatch(handleAddQuestionAnswer({
            qid: question.id,
            answer,
            authedUser
        }))

        this.props.history.push(`/question/${question.id}/results`)
    }
    handleChange = (e) => {
        const answer = e.target.value
        this.setState(() => ({
            answer
        }))
    }
    render() {
        const { question } = this.props
        return (
            <div className='card-info'>
                <p>Would you Rather...</p>
                <form onSubmit={this.handleSubmit} className='vote-options'>
                    <input 
                        name='answer'
                        type='radio'
                        value='optionOne'
                        onChange={this.handleChange}
                        checked={this.state.answer === 'optionOne'}
                        className='option'
                    />
                    {question.optionOne.text}
                    <br />
                    <br />
                    <input 
                        name='answer'
                        type='radio'
                        value='optionTwo'
                        onChange={this.handleChange}
                        checked={this.state.answer === 'optionTwo'}
                        className='option'
                    />
                    {question.optionTwo.text}
                    <br />
                    <br />
                    <div className='center-btn'>
                        <button className='btn'
                            type='submit'
                            disabled={this.state.answer === ''}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }){
    const question = questions[id]

    return {
        question,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(PollVoteOptions))