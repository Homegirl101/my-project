import React, { Component } from "react";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "tachyons";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.jsx";
import Rank from "./components/Rank/Rank"; 
import Signin from "./components/signin/signin";
import Register from "./components/Register/Register";

class App extends Component{
    constructor(){
        super()
        this.state = {
            input: "",
            route: "signin",
            isSignedIn: 'false'
        };
    };

    onChange = (e) => {
        this.setState({input: e.target.value});
        console.log(this.state.input)
    }

    user = () => {
        this.state.input.slice(0, indexof('@'));
    }

    /*updateState = (e) =>{
        this.setState({input: e.target.value});
        console.log(this.state.input)
    }*/

    onRouteChange = (route) =>{
        this.setState({route: route});
    }

    render(){
        if(this.state.route === "signin"){
        return(
                <>
                    <Logo />
                    <Signin onRouteChange = {this.onRouteChange}/>

                </>
            )
        }  else if(this.state.route === 'register') {
            return(<Register onRouteChange={this.onRouteChange}/>)
        }   else {
            return(
                <>
                    <Navigation onRouteChange ={this.onRouteChange} isSignedIn = {true}/>
                    <Rank user={user}/>
                    <ImageLinkForm onChange={this.onChange} updateState={this.updateState} />
                </>
            )
        }
                
                
                //{this.state.route === 'register'} ? <Register onRouteChange={this.onRouteChange}/>
                

        
    }
}

export default App