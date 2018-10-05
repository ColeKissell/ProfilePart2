import React from 'react'

// Changing State
// Physical Button
// Event Handler

class Die extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current : 0, 
            numSides: this.props.numSidesProp
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({current: this.props.randomFunc(this.state.numSides)})
    }
    render() {
        // const numSides = this.props.numSidesProp
        // this.props.myFunc(numSides)
        // this.props.myFunc('This is an error Message')
        // const roll = this.props.randomFunc(numSides)

        return (
            <div>
                { this.state.numSides } sides with a
                first roll of { this.state.current } { '     ' }
                <input 
                    type='button' 
                    value='Roll'
                    onClick={this.clickHandler}
                    // onClick={() => 
                    //     this.setState({
                    //             current: 
                    //                 this.props.randomFunc(this.state.numSides)
                    //             }
                    //         )
                    //     }
                />
            </div>
        )
    }
}

export default Die