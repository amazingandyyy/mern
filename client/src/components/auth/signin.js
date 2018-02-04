import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {signUserIn} from '../../actions';
import CenterCard363 from '../centerCard363';
class Signin extends Component {
    renderAlert(){
        if(this.props.errorMsg) {
            return (
                <div className="alert alert-warning">
                    <strong>Oops! </strong>{this.props.errorMsg}
                </div>
            )
        }
    }
    handleFormSubmit(d) {
        this.props.signUserIn(d)
    }
    render() {
        // console.log('this.props;: ', this.props);
        const {handleSubmit} = this.props;
        return (
                <CenterCard363>
                    <div className='card'>
                    <h4 className="card-header">
                        Sign In
                    </h4>
                        <div className="card-body">
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <div className="form-group">
                                <label>Email:</label>
                                <Field
                                    type= 'email'
                                    name="email"
                                    component="input"
                                    className="form-control form-control-lg"
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
                                    className="form-control form-control-lg"
                                    placeholder="your password"
                                    required
                                    />
                            </div>
                            {this.renderAlert()}
                            <div style={{'paddingTop': '30px'}}>
                                <button type="submit" className="btn btn-lg btn-light btn-block">Sign in</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </CenterCard363>
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