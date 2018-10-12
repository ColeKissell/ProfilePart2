import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip';
// import "./todo.css"
// import DoneIcon from '@material-ui/icons/Done';



const Todo = ({ onClick, completed, text }) => (
    <React.Fragment>
            <Chip 
                label={text}
                color="primary" 
                variant="outlined" 
                onClick={onClick}
                style={ {
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            />
    </React.Fragment>

)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo