import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/register`, this.state)
            .then(res => {
                localStorage.setItem('token', res.data);
                const token = res.data;
                localStorage.setItem('token', token);
                this.props.history.push('/jokes');
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name='username' value={this.state.username} onChange={this.handleOnchange} /></div>
                    <div><input type="password" name='password' value={this.state.password} onChange={this.handleOnchange} /></div>
                    <div>
                        <button type="submit">
                            SignIn
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;