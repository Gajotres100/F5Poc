import React from 'react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
import * as lang from "../../resources/lang";
import config from "react-global-configuration";
class Main extends React.Component {
    constructor(props){
        super(props);
        if(!localStorage.getItem("lang")){
           localStorage.setItem("lang","en");           
        }
        
    }

    render() {
       // console.log(localStorage.getItem("lang"));
        if(localStorage.getItem("lang")==="en"){
            config.set(lang.en,{freeze:false});
        }
        if(localStorage.getItem("lang")==="de"){
            config.set(lang.de,{freeze:false});
        }
        if(localStorage.getItem("lang")==="hr"){
            config.set(lang.hr,{freeze:false});
        }
     
        //console.log(config.get());
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <Progress />
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <TopHeader />

                    {this.props.children}

                    <Footer />

                </div>

            </div>

        )
    }

    componentDidMount() {
        if(!sessionStorage.getItem("auth_token")){
            window.location.href="#/auth/login";
        }
       
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