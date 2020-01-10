import React, { Component } from "react";

export class LoginCard extends Component {
  render() {
    return (
      <div className={"loginCard"}  >
      
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title">{this.props.title}</h4>          
        </div> 
        <div className="image">
      <img src={'img/logo1.png'} />
      <h2>
      {this.props.app}
      </h2>
      </div>
        <div className={"content" }>
          {this.props.content}         
         </div>
        <div className={"buttonArea"+ (this.props.buttonArea ? "" : " noDisplay" )}>       
            {this.props.buttonAreaContent}
        </div>
      </div>
    );
  }
}

export default LoginCard;