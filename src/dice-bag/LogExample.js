import React, { Fragment } from 'react'

class LogExample extends React.Component {

    render() {
        this.props.myFunc('This is from inside LogExample')
        return (
            <Fragment>
                Hello World
            </Fragment>
        )
    }
}

export default LogExample