import React from 'react'
import Die from './Die'
import './dice.css'
// import LogExample from './LogExample'

class Dice extends React.Component {
    state = {
        numSides : [10, 8, 20, 6]
    }

    alertMySides (numSides) {
        // alert(numSides)
    }

    randomizer (max) {
        return Math.ceil(Math.random() * Math.floor(max))
    }
    render() {
        const logMySides = (numSides) => {
            console.log(numSides)
        }
        const sides = this.state.numSides
        return (
            <div className='card'>
                <Die 
                    numSidesProp={sides[0]} 
                    myFunc={this.alertMySides}
                    randomFunc={this.randomizer}
                />
                <Die 
                    numSidesProp={sides[1]} 
                    myFunc={logMySides}
                    randomFunc={this.randomizer}
                />
                <Die 
                    numSidesProp={sides[2]} 
                    myFunc={this.alertMySides}
                    randomFunc={this.randomizer}
                />
                <Die 
                    numSidesProp={sides[3]} 
                    myFunc={logMySides}
                    randomFunc={this.randomizer}
                />

                {/* <LogExample myFunc={logMySides}/>
                <LogExample myFunc={logMySides}/> */}
            </div>
        )
    }
}

export default Dice