import React from 'react';
// import { connect } from 'react-redux'
import Button from "@material-ui/core/Button";

function Square(props) {
    return (
      <Button 
        className="square" 
        variant="outlined" 
        color="primary" 
        onClick={props.onClick}
        size="large"
      >
        {props.value}
      </Button>
    );
}

export default Square;