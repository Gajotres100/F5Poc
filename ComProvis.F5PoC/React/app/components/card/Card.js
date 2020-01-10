import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}  >
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title">{this.props.title}</h4>          
        </div>
       
        <div className={"historyArea"+ (this.props.historyArea ? "" : " noDisplay" )}>       
        {this.props.historyAreaContent}
        </div>
        <div className={"search"+ (this.props.formArea ? "" : " noDisplay" )}>
        <h4>{this.props.formTitle}</h4>
        {this.props.formContent}
        </div>
        <div className={"buttonArea"+ (this.props.buttonArea ? "" : " noDisplay" )}>       
        {this.props.buttonAreaContent}
        </div>
        <div
          className={
            "content" +           
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "") +
            (this.props.contentArea ? "" : " noDisplay" )

          }
        >
          {this.props.content}

         
        </div>
        
      </div>
    );
  }
}

export default Card;