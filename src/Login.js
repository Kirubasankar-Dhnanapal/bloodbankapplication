import React from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    signup = () => {
        fetch(`http://localhost:3002/signup`, {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((result) =>{
            this.props.history.push('/dashboard')
            result.auth === true ? localStorage.setItem('token',result.token) : alert('')
        }
            
        )
    }


    setusername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    setpassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div style={{padding: '30px 30px'}}>
                <div className='loginbox1'>
                    <div className='loginbox'>
                        <div className='logindiv'>
                        <label>Login here</label></div>
                        <input className='usediv' type='text' placeholder='Username' value={this.state.username} onChange={this.setusername} />
                        <br />
                        <input className='loginpwd' type='password' placeholder='Password' value={this.state.password} onChange={this.setpassword} />
                        <br />
                        <div className='loginbutton'>
                            <Button variant="contained" color="primary" onClick={this.signup}>Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Login);