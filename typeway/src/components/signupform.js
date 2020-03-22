import React, { Component } from 'react';
import { Link,  NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/Actions/actionCreators';
import NavBar from './NavBar'

class signupform extends Component {
    state = {
        email: '',
        password: ''
    }

    logContents = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    signUp = (e) => {
        e.preventDefault();
        this.props.submitAction(this.state.email, this.state.password)
    }
   
    icn = 'img' + Math.round(Math.random()*4) + '.png'

    render() {
        return(
            <div>
                <NavBar />
                <div className='authcontainer'>
                    
                    <img src={this.icn} className='avatar'></img>

                    <div>
                        <h1 className='authText'>Create Account</h1>
                    </div>

                    <p className='authhelp'>Email:</p>

                    <div>
                        <input id='email' type='email' placeholder='Email' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <p className='authhelp'>Password:</p>

                    <div>
                        <input id='password' type='password' placeholder='Password' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <div>
                        <button onClick={this.signUp} className='authbutton'>Create Account</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAction: (email, password) => {
            dispatch(actions.USER_CREATE(email, password))
        }
    }
}

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(signupform);