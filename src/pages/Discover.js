import React, { Component } from 'react';
import API from '../utils/API';
import Card from '../components/Card/Card';
import Alert from '../components/Alert/Alert';


export default class Discover extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.nextDog();
    }

    handleClick = event => {
        //get the data-value 
        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = {...this.state };

        if (btnType === "pick") {
            //have 1 in 5 chance to match
            newState.match = 1 === Math.floor(Math.random() * 5) + 1;

            // set newState
            newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;
        } else {
            //if not liked
            newState.match = false;
        }
        //replace state with newState then NextDog
        this.setState(newState);
        this.nextDog();
    };

    nextDog = () => {
        API.getRandom()
        .then(res => 
            this.setState({
                image: res.data.message
            })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="discover">
                <h1 className="text-center">Find a Pup!</h1>
            <Card image={this.state.image} handleClick={this.handleClick}/>
            <h1 className="text-center">
                Offered treats to {this.state.matchCount} pups so far!
            </h1>
            <Alert style={{opacity: this.state.match ? 1 : 0 }} type="success">
                That Pup likes you back!!
            </Alert>
            </div>
        );
    }
}