import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChatPage from './ChatPage'
import ContactList from './ContactList'

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

// const onChatBack = () => {
//   onChatBack
// }

export default function ChatTab() {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  if (count === 0){
    return (
      <ContactList/>
    );
  }
  else {
    return (
      <ChatPage/>
    );
  }
}