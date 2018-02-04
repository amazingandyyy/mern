import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {tryConnect, getUserProfile, updateUserProfile} from '../actions';
import CenterCard363 from './centerCard363';

class Account extends Component {
  constructor(){
    super();
    this.state = {
      editting: false
    }
  }
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
  }
  render() {
    let {status, profile} = this.props;
    return (
      <CenterCard363>
        <div className='card border-secondary'>
        <h4 className="card-header">
          Account
        </h4>
        <div className='card-body'>
        <p className="text-muted">Server status: {status} ☀</p>
          {profile && this.renderProfileForm()}
        </div>
        </div>
      </CenterCard363>
    );
  }
  handleFormSubmit(d){
    this.props.updateUserProfile(d)
  }
  switchEditting() {
    this.setState({editting: !this.state.editting})
  }
  cancelForm(){
    this.switchEditting();
    this.props.reset();
  }
  renderButtons() {
    const {submitting, dirty} = this.props;
    if(this.state.editting){
      return (<div className="form-group">
        <button disabled={!dirty} type="submit" className="btn-lg btn btn-light btn-block">Save Change</button>
        <button disabled={submitting} className="btn-lg btn btn-secondary btn-block" onClick={this.cancelForm.bind(this)}>Cancel</button>
      </div>)
    }else{
      return (<button className="btn btn-light btn-lg btn-block" onClick={this.switchEditting.bind(this)}>Update Information</button>)
    }
  }
  renderProfileForm(){
    const {editting} = this.state;
    const {handleSubmit, dirty, updateProfileFailMsg} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>First Name:</label>
          <Field
            disabled={!editting}
            type= 'text'
            name="firstName"
            component="input"
            className="form-control form-control-lg"
            placeholder="First Name"
            required
            />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <Field
          disabled={!editting}
          type= 'text'
          name="lastName"
          component="input"
          className="form-control form-control-lg"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <Field
            disabled
            readOnly
            type= 'email'
            name="email"
            component="input"
            className="form-control form-control-lg"
            placeholder="sample@email.com"
            required
            />
      </div>
      {dirty && <div className="form-group">
        <label>Password:</label>
        <Field
          type= 'password'
          name="password"
          component="input"
          className={(updateProfileFailMsg)?"form-control form-control-lg is-invalid":"form-control form-control-lg"}
          placeholder="your password"
          required
        />
        {(updateProfileFailMsg) && <div className="invalid-feedback">
          {updateProfileFailMsg}
        </div>}
      </div>}
      <div style={{'paddingTop': '30px'}}>
        {this.renderButtons()}
      </div>
    </form>);
  }
}

function mapStateToProps({auth, user}) {
  return user.profile?{
      status: auth.status,
      profile: user.profile,
      initialValues: {
        email: user.profile.email,
        firstName: user.profile.name.first,
        lastName: user.profile.name.last
      },
      updateProfileFailMsg: user.updateProfileFailMsg
  }:{
    status: auth.status,
    profile: user.profile
  }
}


export default connect(mapStateToProps, {tryConnect, getUserProfile, updateUserProfile})(reduxForm({
  form: 'profileUpdate',
})(Account));