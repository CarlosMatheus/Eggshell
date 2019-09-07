import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
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

function Contact({i},{props})
{
    const classes = useStyles();

    return(
    <ListItem 
    alignItems="flex-start" 
    onClick={()=> props.onClick}>
        <ListItemAvatar>
            <Avatar alt= {props.groups[i].name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary = {props.groups[i].name}
            secondary ={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {props.groups[i].last_name}
                    </Typography>
                    {" — " + props.groups[i].last_message}
                </React.Fragment>
            }
        />
    </ListItem>
    );
}

export default function ContactList() {
  
    const classes = useStyles();
    const props = {
        groups : [
            {
                name: 'Animes unidos',
                last_name: 'Carlos',
                last_message : 'Eu tentei!'
            },
            {
                name: 'LGBT',
                last_name: 'Luiz Anonimo',
                last_message : 'Vou morrer!'
            }]
    }
  const itens=[];
  console.log(props.groups.length);
  for (let i = 0; i<props.groups.length;i++)
  {
    itens.push(Contact({i},{props}));
  }

  return (

    <div>
           <List className={classes.root}>
            {
               itens
            }
            </List> 
        
    </div>

  );
}