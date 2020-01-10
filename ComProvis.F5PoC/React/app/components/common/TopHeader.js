import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    handleLogout(){
        sessionStorage.removeItem("auth_token");
        window.location.href="#/auth/login";
    }
    pickLanguage(event){
        
        localStorage.setItem("lang",event.target.id);
        window.location.reload();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                     
                    </div>
                    <ul className="nav navbar-top-links navbar-left">
                    <li id="long-title">
                            <h2>Cloud security solution</h2>
                    </li>
                    
                    </ul>
                    <ul className="nav navbar-top-links navbar-right">  
                       
                        <li>
                            <a onClick={this.pickLanguage}  title="Hrvatski">
                               <img id="hr" src="img/flag/hr.png" style={{width:25}}/>
                            </a>
                        </li>
                        <li>
                            <a onClick={this.pickLanguage}  title="English">
                                <img id="en" src="img/flag/en.png" style={{width:25}}/>
                            </a>
                        </li>
                        <li>
                            <a onClick={this.pickLanguage}  title="German">
                                <img id="de" src="img/flag/de.png" style={{width:25}}/>
                            </a>
                        </li>
                        <li>
                            <a onClick={this.handleLogout}  title="Logout">
                                <i className="pe-7s-power"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader