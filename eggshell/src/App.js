import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import IconTabs from './Tab';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Body from './Body'
import groupJson from './groups.json';
import userJson from './users.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    height: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center', 
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  localStorage.setItem("groups", JSON.stringify(groupJson));
  localStorage.setItem("users", JSON.stringify(userJson));
  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs={12}> */}
          <IconTabs/>
          {/* <Body/> */}
        {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
