import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {signUserIn} from '../../actions';

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
                <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className='card'>
                        <div className="card-body">
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <h2>Sign In</h2>
                            <div className="form-group">
                                <label>Email:</label>
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
                                <label>Password:</label>
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
                    </div>
                </div>
                <div className="col-sm-3"></div>
                </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        errorMsg: auth.error
    }
}

export default connect(mapStateToProps, {signUserIn})(reduxForm({
    form: 'signin'
})(Signin));