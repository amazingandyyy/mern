import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class Signin extends Component {
    handleFormSubmit(data) {
        console.log(data)
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
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }

}
export default reduxForm({form: 'signin'})(Signin);