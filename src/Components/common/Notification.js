import React, { Component } from 'react';

class Notifications extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="notifications">
                <div id="loadingBox" className="notification"><span>Loading …</span></div>
                <div id="infoBox" className="notification"><span>Info</span></div>
                <div id="errorBox" className="notification"><span>Error</span></div>
            </div>
        )
    }
}

export default Notifications;