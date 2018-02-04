import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {tryConnect, getUserProfile} from '../actions';

class Account extends Component {
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
  }
  render() {
    let {status, profile} = this.props;
    return (
      <div>
        <h1>Account</h1>
        <p className="text-muted">Server status: {status} ☀</p>
        <hr/>
        {profile && this.renderProfile(profile)}
      </div>
    );
  }
  renderProfile(profile){
    return (<div>
        <div>{profile.name.first && profile.name.first} {profile.name.last && profile.name.last}</div>
        <div>{profile.email && profile.email}</div>
        <div>{profile._id && profile._id}</div>
    </div>)
  }
  renderProfileForm(profile){
    return (<div>
        <div>{profile.name.first && profile.name.first} {profile.name.last && profile.name.last}</div>
        <div>{profile.email && profile.email}</div>
        <div>{profile._id && profile._id}</div>
    </div>)
  }
}


function mapStateToProps({auth, user}) {
  return {
      status: auth.status,
      profile: user.profile
  }
}


export default connect(mapStateToProps, {tryConnect, getUserProfile})(reduxForm({
  form: 'profileUpdate',
})(Account));