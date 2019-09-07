import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Message from './Message'
import MessageContainer from './MessageContainer'
import MessageInput from './MessageInput'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ChatPage() {
  const classes = useStyles();

  const items = []

  const names = [
    'Shemika Clevinger', 
    'Monroe Okelly', 
    'Brandie Mudd', 
    'Santo Lafontaine', 
    'Shemika Clevinger', 
    'Monroe Okelly', 
    'Brandie Mudd', 
    'Santo Lafontaine'
  ]
  const selfs = [
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false
  ]
  const messages = [
    "hello",
    "hey",
    "hows it going",
    "sup",
    "how are you?",
    "pretty good tbh",
    "yeah",
    "hahaha"
  ]

  for (let i = 0; i < 8; i++){
    const props = {
      name:names[i], 
      self:selfs[i], 
      message:messages[i],
    }
    items.push(MessageContainer(props))
  }

  return (
    <div >
      <div style={{height: '885px'}}>
        <List className={classes.root}>
          {
            items
          }
        </List>
      </div>
      <MessageInput/>
    </div>
  );
}