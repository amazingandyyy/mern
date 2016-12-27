import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Secret extends Component {
  componentWillMount() {
    this
      .props
      .fetchInfo()
  }
  render() {
    return (
      <div>
        <h1>Secret</h1>
        <p className="text-muted">Status: {this.props.status}☀</p>
      </div>
    );
  }
}

export default connect(({auth}) => {return {status: auth.status} }, actions)(Secret);