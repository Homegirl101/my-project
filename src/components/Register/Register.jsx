import React, { Component } from "react";
//import "./signin.css";
//import tachyons from "tachyons";

class Register extends Component{
    constructor(){
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ''
        }
    }

    getFirstName= (e) => {
        this.setState({firstname: e.target.value});
        console.log(e.target.value)
    }

    getLastName= (e) => {
        this.setState({lastname: e.target.value});
    }

    getEmail= (e) => {
        this.setState({email: e.target.value});
    }

    getPassword= (e) => {
        this.setState({password: e.target.value});
    }

    onButtonClick = () => {
        console.log(this.state)
        fetch("https://young-scrubland-15976.herokuapp.com/register", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
        });
    }

    render(props){
        const {onRouteChange} = this.props;
        return(
            <main className="container">

                <div className="inner-container">
                    <div className="email">
                        <input type="text" placeholder="firstname" onInput={this.getFirstName} onChange={this.getFirstname} />
                        <input type="text" placeholder="lastname" onInput={this.getLastName} onChange={this.getLastname}/>
                    </div>

                    <div className="email">
                        <input type="email" placeholder="Email" onChange={this.getEmail} />
                    </div>
                    <div className="password">
                        <input type= "password" placeholder="password" onChange={this.getPassword}></input>
                    </div>
                    <div className="button">
                        <button onClick={this.onButtonClick}>Register</button>
                    </div>
                </div>
            </main>
        ) 
    };
};

export default Register;