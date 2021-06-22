import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from '../_actions';


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state  = {
            user:{
                fname:'',
                lname:'',
                email:'',
                password:''
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.fname && user.lname && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" name="fname" id="fname"
                                            placeholder="First Name" value={user.fname} onChange={this.handleChange} />
                                            {submitted && !user.fname &&
                                                <div className="help-block text-danger">first name is required</div>
                                            }
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" name="lname" id="lname"
                                            placeholder="Last Name" value={user.lname} onChange={this.handleChange} />
                                            {submitted && !user.lname &&
                                                <div className="help-block text-danger">last name is required</div>
                                            }
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" name="email" id="email"
                                        placeholder="Email Address" value={user.email} onChange={this.handleChange} />
                                        {submitted && !user.email &&
                                                <div className="help-block text-danger">email is required</div>
                                            }
                                </div>
                                <div className="form-group">
                                    
                                        <input type="password" className="form-control form-control-user"
                                            id="password" name="password" placeholder="Password" value={user.password} onChange={this.handleChange} />
                                            {submitted && !user.password &&
                                                <div className="help-block text-danger">Password is required</div>
                                            }
                                    
                                    {/* <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="confirm_password" name="confirm_password" placeholder="Repeat Password" value={user.confirm_password} onChange={this.handleChange} />
                                        {submitted && !user.confirm_password &&
                                                <div className="help-block text-danger">Please confirm password</div>
                                        }
                                    </div> */}
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                                {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                               {/*
                                <hr>
                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a> */}
                            </form>
                            <hr/>
                            {/* <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div> */}
                            <div className="text-center">
                                <Link className="small" to="/login">Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };