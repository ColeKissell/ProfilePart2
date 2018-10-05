import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from "@material-ui/core/Button";
import './addTodo.css'

let AddTodo = ({ dispatch }) => {
    let input

    return <div>
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value));
            input.value = "";
          }}>
          <input ref={node => {
              input = node;
            }} />
          <Button id='todoButton' type="submit" variant="outlined" color="primary">
            Add Todo
          </Button>
        </form>
      </div>;
}
AddTodo = connect()(AddTodo)

export default AddTodo