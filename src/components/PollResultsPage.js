import React from 'react'
import PollCard from './PollCard'
import { connect } from 'react-redux'

/**
* @description View where is shown the poll results for a specific question
*/
function PollResultsPage (props) {
    const { id } = props.match.params
    const { logged } = props
    return (
        <div>
            <PollCard id={id} cardType='results' />
        </div>
    )
}

function mapStateToProps({ logged }){
    return {
        logged
    }
}

export default connect(mapStateToProps)(PollResultsPage)