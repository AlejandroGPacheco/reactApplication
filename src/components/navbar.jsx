import React, { Component } from 'react';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#"> NavBar
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters }
                    </span>
                        </a></nav>
        );
    }
}

export default NavBar;