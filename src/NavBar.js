import React, { Component } from "react";
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }





    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-default fixed-top bg-dark" style={{ backgroundColor: '#03A9F4',marginBottom: '0px',borderRadius: 0,border: 0 }}>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav" style={{ cursor: 'pointer' }}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/searchblooddetail">Search Blood</Link>
                        </li>
                        <li>
                            <Link to="/contact">Post Your Blood Request</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                    </ul>
                    </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);