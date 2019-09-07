import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60,
  },
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function GroupJoin() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.div}>
            <Avatar alt="Alt" src={photo1} className={classes.bigAvatar} />
            <h2>Group name</h2>
            <p>group description</p>
        </div>
        <Button variant="contained" className={classes.button}>
            Join
        </Button>
        <Button variant="contained" className={classes.button}>
            Anonymous
        </Button>
    </React.Fragment>
  );
}