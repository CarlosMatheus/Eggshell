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
import groupJson from './groups.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
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

  const groups=[]

  for (let i = 0; i < 3; i++) {
    if (!groupJson.groups[i].memberList.includes(1)) {
        groups.push(
        name = groupJson.groups[i].displayName,
        image= groupJson.groups[i].displayPicture,
        last_name=userJson.user[groupJson.groups[i].messages[groupJson.groups[i].messages.length  -1].userID].alias.{groupJson.groups[i].id},
        last_message = groupJson.groups[i].messages[groupJson.groups[i].messages.length -1].text,
    }
  }

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
