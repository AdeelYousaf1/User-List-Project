import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
////////////////////////////////////Functional Based////////////////////////////////////////////
const Demo = (props) => {
    return <div className="maindiv_style"> 
        <h1>Hello {props.name}</h1>
        <p>Welcome to React Practice</p>
        </div>
}
////////////////Destructuring//////////////////

// const Demo = ({name}) => {
//     return <div className="maindiv_style"> 
//         <h1>Hello {name}</h1>
//         <p>Welcome to React Practice</p>
//         </div>
// }

////////////////////////////////Component Based///////////////////////////////////////////////
// class Demo extends Component{
//     render(){
//     return <div className="maindiv_style"> 
//         <h1>Hello {this.props.name}</h1>
//         <p>Welcome to React Practice</p>
//         </div>
//     }
// }

export default Demo;