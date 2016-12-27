import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
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
                        <li className="nav-item active">
                            <Link to="/signin" className="nav-link">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                    </ul>
                </span>

            </nav>
        )
    }
}