import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    renderAlert() {
        if (this.props.errorMsg) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!
                    </strong>{this.props.errorMsg}
                </div>
            )
        }
    }
    handleFormSubmit({email, password}) {
        if (data.password == data.password2) {
            this.props.signUserUp({email, password});
        }
    }
    render() {
        // console.log('this.props;: ', this.props);
        const {handleSubmit, password} = this.props;
        return (
            <div className="card card-block center-block">
                <form
                    onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                    className="col-xs">
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <Field
                            name="name"
                            type='text'
                            component="input"
                            className="form-control"
                            placeholder="Name"
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
                            {...password}
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