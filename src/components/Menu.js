import React, { Component } from 'react';
import '../css/Menu.css'

class Menu extends Component {
    render(props) {
        return (
            <button id="lineButton" className="bring-up-nav" onMouseDown={this.props.handleMouseDown} >
                <div id="nav-container">
                    <div className="toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </button> 
        );
    }
}

export default Menu;