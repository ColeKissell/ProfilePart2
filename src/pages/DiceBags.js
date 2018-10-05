import React, { Component, Fragment } from 'react'
import DiceBag from '../dice-bag/DiceBag'

export default class extends Component {
    render() {
        return (
            <div>
                <DiceBag/>
                <DiceBag/>
                <DiceBag/>
            </div>
            
        )
    }
}