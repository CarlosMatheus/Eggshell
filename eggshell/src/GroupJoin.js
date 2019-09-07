import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60,
    alignSelf: 'center',
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

export default function GroupJoin(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.div}>
            <Avatar alt="Alt" src={props.info.groupAvatar} className={classes.bigAvatar} />
            <h2>{props.info.groupName}</h2>
            <p>{props.info.groupDescription}</p>
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