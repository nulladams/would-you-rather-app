import React from 'react' 
import { NavLink } from 'react-router-dom'

/**
* @description Main navigation menu
*/
function Nav (props) {
    	return(
        	<nav className='nav'>
          		<ul>
          			<li>
          				<NavLink to='/polls/questions/unanswered' activeClassName='active'>
          					Home
          				</NavLink>
          			</li>
          			<li>
          				<NavLink to='/add' exact activeClassName='active'>
          					New Question
          				</NavLink>
          			</li>
          			<li>
          				<NavLink to='/leaderboard' exact>
          					Leader Board
          				</NavLink>
          			</li>
          		</ul>
          	</nav>
        )
}

export default Nav