import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Message from './Message'

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

export default function ChatPage() {
  const classes = useStyles();

  const items = []

  const names = [
    'Shemika Clevinger', 
    'Monroe Okelly', 
    'Brandie Mudd', 
    'Santo Lafontaine', 
  ]
  const selfs = [
    false,
    false,
    true,
    false,
  ]
  const messages = [
    'Kept in sent gave feel will oh it we.',
    'Has pleasure procured men laughing shutters nay.',
    'Old insipidity motionless continuing law shy partiality.',
    'Kept in sent gave feel will oh it we.',
  ]

  for (let i = 0; i < 4; i++){
    const props = {
      name:names[i], 
      self:selfs[i], 
      message:messages[i],
    }
    items.push(Message(props))
  }

  return (
    <List className={classes.root}>
      {
        items
      }
    </List>
  );
}