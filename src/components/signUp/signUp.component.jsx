import { Button, TextField } from '@mui/material';
import React from 'react';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <span>
                    Sign up with your email and password
                </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            label='Display name'
                            required
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            label='Password'
                            required
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label='Confirm Password'
                            required
                            variant="standard"
                        />
                    </div>
                    <div>
                        <Button type='submit'>
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;