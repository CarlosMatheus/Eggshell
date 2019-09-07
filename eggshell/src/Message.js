import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Message({name, self, message, onClick}) {
  const classes = useStyles();

  let style = {}
  if (self) {
    style = {display:'flex', justifyContent:'flex-end'}
  }

  return (
    <div style={style} onClick={onClick}>
      <ListItem style={{maxWidth: 360}}>
      {!self ? (
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </ListItemAvatar>
      ):
      (<div></div>)
      }
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {/* Ali Connors */}
              {message}
            </Typography>
            {/* {" — I'll be in your neighborhood doing errands this…"} */}
          </React.Fragment>
        }
      />
      {self ? (
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/250" />
        </ListItemAvatar>
      ):
      (<div></div>)
      }
    </ListItem>
    </div>
  );
}