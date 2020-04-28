import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Adeel'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA this.shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA this.getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA, this.componentDidUpdate')
    }
    
    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}


//////////////////////////////////////// Mounting ////////////////////////////////////////////
// class LifeCycleA extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name: 'Adeel'
//         }
//         console.log('LifecycleA constructor')
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log('LifecycleA getDerivedStateFromProps')
//     }

//     componentDidMount(){
//         console.log('LifeCycleA this.componentDidMount')
//     }
    
//     render() {
//         console.log('LifeCycleA render')
//         return (
//             <div>
//             <div>Lifecycle A</div>
//             <LifeCycleB/>
//             </div>
//         )
//     }
// }

export default LifeCycleA
