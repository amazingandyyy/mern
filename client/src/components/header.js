import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signout">Sign out</NavLink>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item active" key="1">
                        <NavLink to="/signin" className="nav-link">Sign in</NavLink>
                    </li>,
                    <li className="nav-item" key="2">
                        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav
                className="navbar navbar-fixed-top navbar-full navbar-dark bg-primary bg-faded">
                <NavLink className="navbar-brand" to="/">MERN</NavLink>
                <span  className="float-left">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/public">Public</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/secret">Secret</NavLink>
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