import React, { Component } from "react";
import "./signin.css";
//import tachyons from "tachyons";

class Signin extends Component {
    constructor(){
       super();
       this.state = {
            email: '',
            password: ''
       } 
    }

    getEmail = (event) => {
        this.setState({email: event.target.value})
    };

    getPassword = (event) => {
        this.setState({password: event.target.value})
        //console.log(event.target.value)
    };
    onSubmit = () => {
        console.log(this.state);
        fetch("https://ancient-thicket-25925.herokuapp.com/signin/signin", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then(response => response.json()).then(
            data => {
                data === 'success' ? this.props.onRouteChange('home') : this.props.onRouteChange('signin');
            }
        )
    }

    render(props){
        const {onRouteChange} = this.props;
        return(
            <main className="container">

                <div className="inner-container">
                    <p>Already a user? Sign in now</p>
                    <div className="email"><input type="email" placeholder="Email" onChange={this.getEmail} /></div>
                    <div className="password"><input type= "password" placeholder="password" onChange={this.getPassword}></input></div>
                    <div className="button"><button onClick={this.onSubmit}>Sign in</button></div>
                    <p>New user? <span className="span" onClick={() => onRouteChange('register')}>Register Now</span></p>
                </div>
            </main>
        ) 
    };
};

export default Signin;