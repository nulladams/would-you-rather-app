import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'


/**
* @description View where the user can create a new poll question
* @constructor
*/
class NewQuestionPage extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(() => ({
            [name]: value
        }))
    }
    render() {
        const { optionOneText, optionTwoText, toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/polls/questions/unanswered' />
        }
        var isEmpty = () => {
            if ((optionOneText === '') || (optionTwoText === '')) {
                return true
            } else {
                return false
            }
        }
        return (
            <div className='card-box'>
                <div className='card-title'>
                    <h4>Create New Question</h4>
                </div>
                <div className='new-question-card'>
                    <span style={{ fontSize: '15px' }}>Complete the question: </span>
                    <div className='form-title'>
                        <h3>Would you rather...</h3>
                    </div>
                    <form onSubmit={this.handleSubmit} className='new-question-form'>
                        <input 
                            placeholder="Enter Option One Text Here"
                            name="optionOneText"
                            value={this.state.optionOneText}
                            onChange={this.handleChange}
                        />
                        <p style={{ textAlign: 'center' }}>or</p>
                        <input
                            placeholder="Enter Option Two Text Here"
                            name="optionTwoText"
                            value={this.state.optionTwoText}
                            onChange={this.handleChange}
                        />
                        <button className='btn' disabled={isEmpty()}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ logged }){
    return {
        logged
    }
}

export default connect(mapStateToProps)(NewQuestionPage)