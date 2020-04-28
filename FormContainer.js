import React, { Component } from 'react'
class FormContainer extends Component {
      constructor(props) {
          super(props)
  
          this.state = {
                AllUsers: [],
                NewUser: {
                        id: 0,
                        avatar:'',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        address: '',}
                    ,
                error: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',}
          }; 
      }

      // Form Events
    onInputChage = (e) => {
        let NewUser = this.state.NewUser;
        NewUser[e.target.name] = e.target.value;
        this.ValidateField(e);

        this.setState({ NewUser: NewUser})
    }

    CheckIfFormValid = () => {
        let isValid = (
                    this.state.error.firstName === '' && 
                    this.state.error.lastName === '' && 
                    this.state.error.email === '' && 
                    this.state.error.phone === '' &&  
                    this.state.error.address === '' && 

                    this.state.NewUser.firstName !== '' &&  
                    this.state.NewUser.lastName !== '' &&  
                    this.state.NewUser.email !== '' &&  
                    this.state.NewUser.phone !== '' &&  
                    this.state.NewUser.address !== ''        
                )

        return isValid;
    }

    handleSubmit = (e) => { 
        e.preventDefault()

        if(!this.CheckIfFormValid()){
            alert('kindly, Double Check all fields..')
            return;
        }

        let AllUsers = this.state.AllUsers;
        this.state.NewUser.id = (new Date()).getTime();
        
        AllUsers.push(this.state.NewUser);

        this.setState({AllUsers: AllUsers});
        localStorage.setItem('user', JSON.stringify(AllUsers));
        alert('Successfully added to local storage');
    }

     // React Life Cycle
     componentDidMount() {
 
        if (localStorage.getItem('user') && localStorage.getItem('user') != "")  {
            const AllUsers = JSON.parse(localStorage.getItem('user'));

            this.userData = JSON.parse(localStorage.getItem('user'));
            this.setState({AllUsers});
        } 
    }
  
    getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }
 
    imageUpload = (e) => {
        const file = e.target.files[0];
        this.getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64; 
          
            let NewUser = this.state.NewUser;
            NewUser.avatar = base64;
            this.setState({ NewUser: NewUser})
        });
    };

    

    ValidateField = (event) => {
        let testResult = false;
        let errors = this.state.error;
        
        switch(event.target.name){
            case 'firstName':
            case 'lastName':
                testResult = /^[a-z A-Z]{5,10}$/.test(event.target.value) 
                errors[event.target.name] = testResult ? '' : `Invalid value in ${event.target.name}`;
                break;
            case 'email':
                testResult = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                            .test(event.target.value)
                errors[event.target.name] = testResult ? '' : 'invalid email'; 
                break;
            case 'address':
                testResult = /^[a-zA-Z0-9\s,.'-]{3,}$/.test(event.target.value) 
                errors[event.target.name] = testResult ? '' : `Invalid value in ${event.target.name}`;
                break;
            case 'phone':
                testResult = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(event.target.value) 
                errors[event.target.name] = testResult ? '' : `Invalid value in ${event.target.name}`;
                break;

            default:
                console.log('no field defined');
        }

        this.setState({error: errors});
        return testResult;
    }

 
  
    render() 
        {
            return (
            <main>
                <h1>User Detail</h1>
                <form className="inputForm" onSubmit={this.handleSubmit}>
                  {this.state.NewUser.avatar !== '' ?
                        <img src={this.state.NewUser.avatar} width="75" height="75"/>
                        : ''
                    }
                    
                    <br/>
                    <input 
                    type="file" 
                    id="imageFile" 
                    name='imageFile' 
                    onChange={this.imageUpload} 
                    />
                    <br />

                    <input
                    type = "text"
                    className= "text"
                    onChange = {this.onInputChage}
                    name = "firstName"
                    placeholder = "First Name"
                    value = {this.state.firstName}
                    />   
                    <br />
                    <div className="form-error">{this.state.error.firstName}</div>
                    <br />
    
                    <input
                    type ="text"
                    className= "text"
                    onChange = {this.onInputChage}
                    name = "lastName"
                    placeholder = "Last Name"
                    value = {this.state.lastName}
                    /><br />
                    <div className="form-error">{this.state.error.lastName}</div>
                    <br />
    
                    <input
                    type = "email"
                    className= "text"
                    onChange = {this.onInputChage}
                    name = "email"
                    placeholder = "Email"
                    value = {this.state.email}
                    /><br />
                    <div className="form-error">{this.state.error.email}</div>
                    <br />
    
                    <input
                    type  = "tel"
                    className= "text"
                    onChange = {this.onInputChage}
                    name = "phone"
                    placeholder = "Phone"
                    value = {this.state.phone}
                    /><br />
                    <div className="form-error">{this.state.error.phone}</div>
                    <br />
    
                    <input
                    type = "text"
                    className= "text"
                    onChange = {this.onInputChage}
                    name = "address"
                    placeholder = "Address"
                    value = {this.state.address}
                    /><br />
                    <div className="form-error">{this.state.error.address}</div>
                    <br />
    
                    <button onClick={this.props.onInputChage} className="submit btnSub">Submit</button>
                </form>
            </main>
            
        )
    }
}

export default FormContainer
