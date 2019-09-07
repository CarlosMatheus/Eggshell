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
import { string } from 'prop-types';

var groupJson = JSON.parse(localStorage.getItem("groups"));
var userJson= JSON.parse(localStorage.getItem("users"));

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

export default function ChatTab() {

  console.log("char tab");
  const [count, setCount] = useState(0);

 const groups=[]


  for (let i = 0; i < 3; i++) {

    if (groupJson.groups[i].memberList.includes(1)) {
        
        let last_message = groupJson.groups[i].messages[groupJson.groups[i].messages.length - 1];

        if (!last_message) continue;
        groups.push({
          name : groupJson.groups[i].displayName,
          image : groupJson.groups[i].displayPicture,
          last_name : userJson.users[last_message.userID -1].aliases.message_k ,
          last_message : groupJson.groups[i].messages[groupJson.groups[i].messages.length -1].text,
          last_message_text: last_message.text,
          last_message_id: last_message.userID,
      })
    }
  }

    return (
      <ContactList groups={groups} onClick={() => setCount(!count)} />
    );

  // else {
  //   return (
  //     <ChatPage/>
  //   );
  // }
}
