import React from 'react';
import IconTabs from './Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chat from './Chat'

function Body() {
    return (
        <div>
            <Chat/>
        </div>
    );
}
  
export default Body;