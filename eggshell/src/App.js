import React from 'react';
import IconTabs from './Tab';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Body from './Body'
import groupJson from './groups.json';
import userJson from './users.json';
import purple from '@material-ui/core/colors/purple';
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700]
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    // primaryText: {
    //   // backgroundColor: theme.palette.background.default,
    //   // padding: theme.spacing(1, 2),
    //   color: purple,
    // },
    // text: {
    //   primary:purple,
    //   // secondary: "#00000"
    // },
    // primary: purple,
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

function WithTheme() {
  const theme = useTheme();
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  const styles = {
    primaryText: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(1, 2),
      color: primaryText,
    },
    primaryColor: {
      backgroundColor: primaryColor,
      padding: theme.spacing(1, 2),
      color: theme.palette.common.white,
    },
  };

  return (
    <div style={{ width: 300, color:'#8bc34a'}}>
      <IconTabs theme={theme}/>
    </div>
  );
}

function App() {
  const classes = useStyles();
  localStorage.setItem("groups", JSON.stringify(groupJson));
  localStorage.setItem("users", JSON.stringify(userJson));
  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>
        <WithTheme />
      </ThemeProvider>
    </div>
  );
}

export default App;
