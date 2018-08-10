import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem('token');
        const requestOptions = { headers: { authorization: token } }
        axios
            .get(`http://localhost:5000/api/jokes`, requestOptions)
            .then(res => this.setState({ jokes: res.data }))
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                {this.state.jokes.map((joke, i) => {
                    return <li key={i}> {joke.setup} : {joke.punchline} </li>
                })}
            </div>
        );
    }
}

export default Jokes;