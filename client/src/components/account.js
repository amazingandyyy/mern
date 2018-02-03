import React, {Component} from 'react';
import {connect} from 'react-redux';
import {tryConnect, getUserProfile} from '../actions';

class Account extends Component {
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
  }
  render() {
    let {status, profile} = this.props;
    console.log(profile);
    return (
      <div>
        <h1>Account</h1>
        <p className="text-muted">Status: {status}☀</p>
        <hr/>
        <div>{profile && profile.name}</div>
        <div>{profile && profile.email}</div>
        <div>{profile && profile._id}</div>
      </div>
    );
  }
}

function mapPropToState({auth, user}) {
  return {
      status: auth.status,
      profile: user.profile
  }
}

export default connect(mapPropToState, {tryConnect, getUserProfile})(Account);