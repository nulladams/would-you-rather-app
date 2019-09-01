import React from 'react'
import { NavLink } from 'react-router-dom'

/**
* @description Menu to navigate between unanswered and answered questions
*/
function PollsNav () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/polls/questions/unanswered' activeClassName='active'>
                        Unanswered Questions
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/polls/questions/answered' activeClassName='active'>
                        Answered Questions
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default PollsNav