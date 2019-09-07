import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GroupJoin from './GroupJoin';
import groupJson from './groups.json';
import { StylesProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f0f0f0",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    }, 
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();

  const [join, setJoin] = useState(0);
  const [info, setInfo] = useState(0);

  useEffect(() => {
    setJoin(props.join);
  }, [props])

  const handleClick = (id, groupName, groupDescription, groupAvatar) => {
    setJoin(true);
    setInfo({"id": id, "groupName": groupName, "groupDescription": groupDescription, "groupAvatar": groupAvatar});
  }

  if (join === true) {
      return <GroupJoin info={info}/>
  }

  let rows = []

  for (let i = 0; i < 3; i++) {
    if (!groupJson.groups[i].memberList.includes(1)) {
        let name = groupJson.groups[i].displayName;
        let description = groupJson.groups[i].description;
        let avatar = groupJson.groups[i].displayPicture;

        rows.push(
            <React.Fragment>
            <ListItem alignItems="flex-start" onClick={(itemid, groupName, groupDescription, groupAvatar) => 
                handleClick(i, name, description, avatar)}>
                <ListItemAvatar>
                <Avatar alt="AA" src={avatar}/>
                </ListItemAvatar>
                <ListItemText
                primary={name}
                />
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>
        );
    }
  }

  return (
      <React.Fragment>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        
        <List className={classes.root}>
            {rows}
        </List>
      </React.Fragment>
  );
}