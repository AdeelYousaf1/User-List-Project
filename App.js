import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './ComponentPractice/FormValidation/Redux/store'
import FormContainer from './ComponentPractice/FormValidation/FormContainer'
import UserList from './ComponentPractice/FormValidation/UserList'
import Edit from './ComponentPractice/FormValidation/Edit'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';  // npm install react-router-dom


class App extends Component {
    render() {
        return ( 
            <div style={{textAlign:"center"}}>
                <Provider store = {store}>
                    <Router>
                        <div className="nav">
                            <Link to="/add">Add New User</Link>
                            <Link to="/">View All</Link>
                        </div>
                        <Route exact path="/" component={UserList} />
                        <Route exact path="/add" component={FormContainer} />
                        <Route exact path="/edit/:user_id" component={Edit} />
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App
