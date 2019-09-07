import React from 'react';
import IconTabs from './Tab';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
    <div style={{ width: 300 }}>
      <IconTabs theme={theme}/>
    </div>
  );
}

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>
        <WithTheme />
      </ThemeProvider>
    </div>
  );
}

export default App;
