import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    renderAlert(error) {
        let errorMsg = error || this.props.errorMsg
        if (this.props.errorMsg) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!
                    </strong> {errorMsg}
                </div>
            )
        }
    }
    handleFormSubmit(data) {
        if (data.password == data.password2) {
            this.props.signUserUp(data);
        }else{
            this.renderAlert('password does not matched');
        }
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className='row'>
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className='card'>
                        <div className="card-body">
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <h2>Sign Up</h2>
                        <div className="form-group">
                            <label>First name:</label>
                            <Field
                                name="firstName"
                                type='text'
                                component="input"
                                className="form-control"
                                placeholder="First Name"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Last name:</label>
                            <Field
                                name="lastName"
                                type='text'
                                component="input"
                                className="form-control"
                                placeholder="Last Name"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <Field
                                name="email"
                                type='email'
                                component="input"
                                className="form-control"
                                placeholder="sample@email.com"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <Field
                                type='password'
                                name="password"
                                component="input"
                                className="form-control"
                                placeholder="your password"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Comfirm Password:</label>
                            <Field
                                type='password'
                                name="password2"
                                component="input"
                                className="form-control"
                                placeholder="your password again"
                                required/>
                        </div>
                        {this.renderAlert()}
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {}
    // console.log(formProps)
    if(formProps.password !== formProps.password2){
        errors.password = 'Password must match';
    }
    return errors;
}

function mapStateToProps({auth}) {
    return {errorMsg: auth.error}
}

Signup = reduxForm({
    form: 'signup',
    validate
}, null, actions)(Signup);
Signup = connect(mapStateToProps, actions)(Signup);

export default Signup;