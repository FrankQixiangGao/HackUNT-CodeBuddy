import React from 'react'
import './sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import sidebarChannel from './sidebarChannel';

function sidebar() {
    return (
        <div className="sidebar">
            <h1>sidebar</h1>
            <div className="sidebar_top">
                <h3>Chat section</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar_channel">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="siderbar_addChannel"/>
                </div>
            </div>
            <div className="sidebar__channelsList">
                <sidebarChannel></sidebarChannel>
            </div>
        </div>
    );
}

export default sidebar
