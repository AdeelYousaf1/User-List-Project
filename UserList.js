import React, { Component } from 'react'

import SingleItem from './SingleItem';
import './viewList.css';

class UserList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Users: [],
             FilteredUsers: [],   // for search field 
             selectedRowsId: []
        }
    }

     
     componentDidMount() { 
        if (localStorage.getItem('user') && localStorage.getItem('user') != "")  {
            const Users = JSON.parse(localStorage.getItem('user')); 
            this.setState({Users, FilteredUsers: Users});
        }
    }

    HandleSearch = (event) => {
        let FilteredUsers = this.state.Users.filter(item => (
                item.firstName.toLowerCase().includes(event.target.value.toLowerCase())
                || item.lastName.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
        
        this.setState({FilteredUsers}); 
    }

    HandleSingleDelet = (id) => {
        let Users = this.state.Users;
        Users = Users.filter(item => item.id !== id);

        this.setState({Users});
        localStorage.setItem('user', JSON.stringify(Users));
    }
  
    handleSelect = (id) => {
        let selectedRowsId = this.state.selectedRowsId;  

        if(selectedRowsId.find(item => item === id) === undefined){ // check if id already exist in the list
            selectedRowsId.push(id);    // add the new id ,  as it does't exist in the list
        }else
            selectedRowsId = selectedRowsId.filter(item => item !== id); // remove id that exist in the array

        this.setState({selectedRowsId});    // update the state
    } 

    handleDeleteAll = () => { 
        let RemainingUsers = this.state.Users.filter(item => (
                this.state.selectedRowsId.find(rowID => rowID === item.id) === undefined
            )
        );
        
        this.setState({Users: RemainingUsers, FilteredUsers: RemainingUsers, selectedRowsId: [] });
        localStorage.setItem('user', JSON.stringify(RemainingUsers));
    }

    render() {
        return (
            <div>
                <div>
                <input type="text" id="myInput" 
                        onChange={this.HandleSearch}
                        placeholder="Search for Users.." 
                        title="Type in a name"/>
                </div>
                <input style={{padding:'10px', marginBottom: "20px", backgroundColor:"red", color:"white"}} 
                        type="button" 
                        onClick={this.handleDeleteAll}
                        value="Multipale Delete"/>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Avatar</td>
                                <td>First-Name</td>
                                <td>Last-Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Address</td>
                                <td>Action</td>
                            </tr>
                            {
                                this.state.FilteredUsers ?
                                this.state.FilteredUsers.map(item => <SingleItem 
                                                                        singleDelete={this.HandleSingleDelet} 
                                                                        handleSelection={this.handleSelect}
                                                                        item={item}/>)
                                : ''
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default UserList
