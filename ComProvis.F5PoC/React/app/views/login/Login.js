import React ,{Component} from "react";
import LoginCard from "../../components/card/LoginCard.js";
import * as Url from "../../config/url.js";
import config from "react-global-configuration";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            usernameValid:false,
            passwordValid:false,
            inputType:"password",
            checked:false,
            isLoading:false, 
            //from errors:
            formErrors:{
                username:"",
                password:"",
                             
            },
            //enitire form validate
            formValid:true,
            errorMessage:false

        },
      
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        const cachedHits = sessionStorage.getItem("auth_token");
        //console.log(cachedHits);
        if(cachedHits){
            window.location.href="/";
        }   
        
    }
    handleSubmit(event) {   

        event.preventDefault();
        this.setState({isLoading:true});
        
       fetch(Url.ApiUrl+"one/"+this.state.username+"/password/"+this.state.password, {
            method: "GET",
            headers :new Headers({ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               })
          })
          .then(response => response.json())
          .then(res => {
            //console.log(res);
            sessionStorage.setItem("auth_token",res.token);    
            window.location.href="/";       
          
        });
        
          
    }
    handleChange = (event) => {
        const { target: { name, value } } = event
        this.setState({[name]: value,errorMessage:false}
           // , () => { this.validateField(name, value) }
        );          
    }
    errorClass(error) {
        return(error.length === 0 ? '' : ' has-error');
    }
    handleCheck = (event) => {     
      event.preventDefault();
        this.setState({checked: !this.state.checked});
      
        if (this.state.checked)
            this.setState({inputType: "text"});
        else 
      
            this.setState({inputType: "password"});
          
    }
    
    render(){
     //  if(!this.state.isLoading )
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-offset-4 col-md-4 col-xs-12 col-sm-12">                 
                    <LoginCard
                        title={config.get("loginTitle")}                      
                        hCenter={true}
                        app={config.get("appName")}    
                        content={
                            
                            [<form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    
                                    <div className={"form-group col-md-12" +this.errorClass(this.state.formErrors.username)}>
                                    <label className="control-label col-md-12"> {config.get("usernameLabel")} </label>
                                    <div className="col-md-12">
                                        <div className="input-group"> 
                                            <input  type="text"  placeholder={config.get("usernameLabel")}  name="username"  className="form-control" onChange={this.handleChange} value={this.state.username} />   
                                               <span className="input-group-addon"></span>                                   
                                        </div> 
                                        {this.state.formErrors.username !="" ? <span className="text-danger" >{config.get("usernameLabel")} {this.state.formErrors.username}</span>: null }  
                                    </div> 
                                    </div>                                        
                                    <div className={"form-group col-md-12" +this.errorClass(this.state.formErrors.password)}>
                                        <label className="control-label col-md-12">{config.get("passwordLabel")} </label>
                                        <div className="col-md-12">
                                            <div className="input-group">                                                   
                                            <input type={this.state.inputType}  placeholder={config.get("passwordLabel")}  name="password"  className="form-control" onChange={this.handleChange} value={this.state.password} />  
                                                <span className={"input-group-addon"+(this.state.inputType=="password" ? "": " activeMagenta") } onClick={this.handleCheck} ><i className="pe-7s-look" onClick={this.handleCheck} ></i></span>
                                            </div>
                                            {this.state.formErrors.password !="" ? <span className="text-danger" >{config.get("passwordLabel")} {this.state.formErrors.password}</span>: null }                                            
                                        </div>     
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-12">                                
                                    <div className="form-group col-md-12">                             
                                        <div className="col-md-12">                                       
                                            <button className="btn btn-success pull-right" type="submit" disabled={!this.state.formValid} >
                                            {config.get("buttonLogin")}
                                            </button>
                                        </div> 
                                    </div>
                                </div>
                                
                                
                               
                            </div>
                           
                        </form>
                        ]
                       
                        }
                        
                        
                    />
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Login