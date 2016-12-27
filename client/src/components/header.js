import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign out</Link>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item active" key="1">
                        <Link to="/signin" className="nav-link">Sign in</Link>
                    </li>,
                    <li className="nav-item" key="2">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav
                className="navbar navbar-fixed-top navbar-full navbar-dark bg-primary bg-faded">
                <Link className="navbar-brand" to="/">MERN</Link>
                <span  className="float-left">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/public">Public</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/secret">Secret</Link>
                        </li>
                    </ul>
                </span>
                <span className="float-right">
                    <ul className="nav navbar-nav">
                        {this.renderSignButton()}
                    </ul>
                </span>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)