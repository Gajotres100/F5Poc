import React from 'react';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';

import * as lang from "../../resources/lang";
import config from "react-global-configuration";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isFetch:false
        }
        if(sessionStorage.getItem("auth_token")){
            window.location.href="#/";
        }
        if(!localStorage.getItem("lang")){
            localStorage.setItem("lang","en");           
         }
    }
    
    render() {
        if(localStorage.getItem("lang")==="en"){
            config.set(lang.en,{freeze:false});
        }
        if(localStorage.getItem("lang")==="de"){
            config.set(lang.de,{freeze:false});
        }
        if(localStorage.getItem("lang")==="hr"){
            config.set(lang.hr,{freeze:false});
        }
       
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        let wrapperClassT = "transperent-bg " + this.props.location.pathname;
        
        return (
            <div id="wrapperLogin">            
                <div id="page-wrapper-login" className={wrapperClassT}>

                           

                        {this.props.children}        

                </div>
                 

            </div>

        );
        //}
      
       // return null
    }
   
    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default Main