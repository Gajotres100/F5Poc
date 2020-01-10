import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import config from "react-global-configuration";
import { smoothlyMenu } from '../layouts/Helpers';
class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
        smoothlyMenu();       
        
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }
    
    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li key={1} className="nav-header" >
                       
                        <img src={"img/logo.png"} id="main-logo" />    
                           
                            <div className="logo-element">
                            F5
                            </div>
                        </li>
                        <li key={2} className={this.activeRoute("/create")}>
                            <Link to="/" title={"F5 Solution"}> <i className="pe-7s-share"></i> {config.get("head")}</Link>
                        </li>                     
                                              
                    </ul>

            </nav>
        )
    }
}

export default Navigation
