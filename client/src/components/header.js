import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <nav
                className="navbar navbar-fixed-top navbar-full navbar-dark bg-primary bg-faded">
                <a className="navbar-brand" href="#">MERN</a>
                <span  className="float-left">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Section A</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Section B</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Section C</a>
                        </li>
                    </ul>
                </span>
                <span className="float-right">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <Link to="/signin" className="nav-link" href="#">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </span>

            </nav>
        )
    }
}