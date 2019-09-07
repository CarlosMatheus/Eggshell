import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: '40px',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ConfigPage(props) {
  const classes = useStyles();
  
  let data = JSON.parse(localStorage.getItem("users")).users;

  return (
    <React.Fragment>
        <div className={classes.div}>
            <Avatar alt="Alt" src={data[0].displayPicture} className={classes.bigAvatar} />
            <h2>{data[0].displayName}</h2>
            <p><b>E-mail:</b> {data[0].email}</p>
            <p><b>Phone:</b> {data[0].phoneNumber}</p>
            <p><b>Username:</b> {data[0].username}</p>
        </div>
    </React.Fragment>
  );
}