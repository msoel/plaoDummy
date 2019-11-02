import React, { Component } from 'react';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row justify-content-md-center">
                <div className="lds-css ng-scope">
                    <div className="lds-ripple heightWidth100">
                        <div></div><div></div></div></div>
                
                <h2>{this.props.message}</h2> 
                
                <div className="lds-css ng-scope">
                    <div className="lds-ripple heightWidth100">
                    <div></div><div></div></div></div>
            </div>
            
         );
    }
}
 
export default Loading;
