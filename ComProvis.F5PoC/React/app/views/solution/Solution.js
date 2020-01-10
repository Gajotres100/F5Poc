import React,{Component} from "react";
import Card from "../../components/card/Card.js";
import * as Url from "../../config/url.js";
import * as Data from "../../data/dropdownData.js";
import config from "react-global-configuration";
class Solution extends Component{
    constructor(props){
    super(props);
    this.state={
        isLoading:false,
      
        formValid:true
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        document.title=config.get("appName");   
        this.setState({
            provider:Data.cloudProvider.name,
            appType:Data.appType.name,
            securityDevice:Data.securityDevice.name,
            securityFeature:Data.securityFeature.name,
            vmCapacity:Data.vmCapacity.name
        });
        console.log(this.state);
    }
    handleChange = (event) => {       
        const { target: { name, value } } = event
        this.setState({[name]: value}); 
    }    
    handleSubmit(event) {    
        event.preventDefault();
        this.setState({isLoading:true});

        fetch(Url.ApiUrl+"/one/save",{
            method:"POST",
            headers:new Headers({
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ sessionStorage.getItem("auth_token")
            })
        })
        
        .then(data=>{
            console.log(data);
            this.setState({isLoading:false})
        })
    }
    
    render(){
    
    return (
        <div className="wrapper wrapper-content animated fadeIn">    
         {!this.state.isLoading ? null : 
            <div className="ajax-loading-block-window">
                                   
            </div>}       
            <div className="row">
            <div className="col-lg-12">
                <h2 className="main-h2">{config.get("head")}</h2>
                <Card
                title=""
                formTitle=""
                contentArea                   
                formArea={false}
                content={
                    <div className="row">
                        <div className="col-md-8">
                        <form onSubmit={this.handleSubmit}>                                   
                                
                                <div className={"form-group col-xs-12 col-md-6"}>
                                    <label className="control-label col-md-12">
                                    {config.get("cloudProviderLabel")}<span className="text-required">*</span></label>
                                    <div className="col-md-12">
                                        <div className="custom-select" >
                                            <select onChange={this.handleChange}  name="provider" value={this.state.provider}> 
                                                <option key={1} value={this.state.provider}>{this.state.provider}</option>                                                                                    
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div className="clearfix"></div>
                                <div className={"form-group col-xs-12 col-md-6"}>
                                    <label className="control-label col-md-12">{config.get("appTypeLabel")}<span className="text-required">*</span></label>
                                    <div className="col-md-12">
                                        <div className="custom-select" >
                                            <select onChange={this.handleChange}  name="appType" value={this.state.appType}>                                                
                                                <option value={this.state.appType}>{this.state.appType}</option>                                                                                    
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div className="clearfix"></div>
                                <div className={"form-group col-xs-12 col-md-6"}>
                                    <label className="control-label col-md-12">{config.get("securityDeviceLable")}<span className="text-required">*</span></label>
                                    <div className="col-md-12">
                                        <div className="custom-select" >
                                            <select onChange={this.handleChange}  name="securityDevice" value={this.state.securityDevice}>                                               
                                                <option  value={this.state.securityDevice}>{this.state.securityDevice}</option>                                                                                    
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div className="clearfix"></div>
                                <div className={"form-group col-xs-12 col-md-6"}>
                                    <label className="control-label col-md-12">{config.get("securityFeatureLabel")}<span className="text-required">*</span></label>
                                    <div className="col-md-12">
                                        <div className="custom-select" >
                                            <select onChange={this.handleChange}  name="securityFeature" value={this.state.securityFeature}>
                                                
                                                <option  value={this.state.securityFeature}>{this.state.securityFeature}</option>                                                                                    
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div className="clearfix"></div>
                                <div className={"form-group col-xs-12 col-md-6"}>
                                    <label className="control-label col-md-12">{config.get("vmCapacityLabel")}</label>
                                    <div className="col-md-12">
                                        <div className="custom-select" >
                                            <select onChange={this.handleChange}  name="vmCapacity" value={this.state.vmCapacity}>                                                
                                                <option  value={this.state.vmCapacity}>{this.state.vmCapacity}</option>                                                                                    
                                            </select>
                                        </div>
                                    </div> 
                                </div>                               
                                <div className="clearfix"></div>  
                                <div className="form-group col-xs-12 col-md-6"> 
                                    <div className="col-md-12">
                                        <button className="btn btn-success pull-right" type="submit" disabled={!this.state.formValid}>
                                        {config.get("buttonSave")}
                                        </button>
                                        <button className="btn btn-drop pull-right" type="button" >
                                        {config.get("buttonCancel")}
                                        </button>
                                    </div>
                                </div>
                            </form> 
                        </div>                        
                    </div>   
                        
                }    
                
                
                
                
                />
                </div>
            </div>
        </div>
        )
    }
}

export default Solution;
