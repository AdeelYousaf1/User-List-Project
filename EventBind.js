import React, { Component } from 'react'
import ClassClick from './ComponentPractice/ClassClick'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.ClickHandler = this.ClickHandler.bind(this)
    }

    // ClickHandler(){
    //     this.setState({
    //         message: 'Adeel!'
    //     })
    //     console.log(this)
    // }

    ClickHandler = () => {
        this.setState({
            message: 'Adeel!'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.ClickHandler.bind(this)}>Click</button>     ////Bind Method///// */}
                {/* <button onClick={() => this.ClickHandler()}>Click</button>       ////Arow Function//// */}
                {/* <button onClick={this.ClickHandler}>Click</button>     ////Binding in Constructor///// */}
                {/* Binding in class property */}
                <button onClick={this.ClickHandler}>Click</button> 
            </div>
        )
    }
}

export default EventBind
