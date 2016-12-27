import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
    renderAlert(){
        if(this.props.errorMsg) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong>{this.props.errorMsg}
                </div>
            )
        }
    }
    handleFormSubmit(data) {
        this.props.signUserIn(data)
    }
    render() {
        // console.log('this.props;: ', this.props);
        const {handleSubmit} = this.props;
        return (
            <div className="card card-block center-block">
                <form
                    onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                    className="col-xs">
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <Field
                            type= 'email'
                            name="email"
                            component="input"
                            className="form-control"
                            placeholder="email@email.com"
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Field
                            type= 'password'
                            name="password"
                            component="input"
                            className="form-control"
                            placeholder="your password"
                            required
                            />
                    </div>
                    {this.renderAlert()}
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        errorMsg: auth.error
    }
}

Signin = reduxForm({
    form: 'signin'
}, null, actions)(Signin);
Signin = connect(mapStateToProps, actions)(Signin);

export default Signin;