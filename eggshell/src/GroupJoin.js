import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import ChatTab from './ChatTab';

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
  
  const [returnValue, setReturn] = useState("0");

  const handleJoin = () => {
    let groups = JSON.parse(localStorage.getItem("groups"));
    groups.groups[(props.info.id - 1)].memberList.push(1);
    localStorage.setItem("groups", JSON.stringify(groups));

    let users = JSON.parse(localStorage.getItem("users"));
    users.users[0].aliases[props.info.id.toString()] = users.users[0].displayName;
    localStorage.setItem("users", JSON.stringify(users));

    setReturn(1);
  }

  const handleAnonymous = () => {
    let groups = JSON.parse(localStorage.getItem("groups"));
    groups.groups[(props.info.id - 1)].memberList.push(1);
    localStorage.setItem("groups", JSON.stringify(groups));

    let users = JSON.parse(localStorage.getItem("users"));
    users.users[0].aliases[props.info.id.toString()] = "nome aleatorio";
    localStorage.setItem("users", JSON.stringify(users));

    setReturn(1);
  }

  if (returnValue == 1) {
    return (<ChatTab/>);
  }
  return (
    <React.Fragment>
        <div className={classes.div}>
            <Avatar alt="Alt" src={props.info.groupAvatar} className={classes.bigAvatar} />
            <h2>{props.info.groupName}</h2>
            <p>{props.info.groupDescription}</p>
        </div>
        <Button variant="contained" className={classes.button} onClick={() => handleJoin()}>
            Join
        </Button>
        <Button variant="contained" className={classes.button} onClick={() => handleAnonymous()}>
            Anonymous
        </Button>
    </React.Fragment>
  );
}