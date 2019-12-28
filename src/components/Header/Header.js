import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="user">
                    <div className="img">
                    <i className="fas fa-user fa-lg"></i>
                    </div>
                    <span className="name">Chat</span>
                </div>
                <div className="options"><i className="fas fa-ellipsis-h fa-lg"></i></div>
            </div>
        )
    }
}

export default Header;