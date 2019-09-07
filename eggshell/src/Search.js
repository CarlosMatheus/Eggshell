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
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
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

  const handleClick = (id, groupName, groupDescription) => {
    setJoin(true);
    setInfo({"id": id, "groupName": groupName, "groupDescription": groupDescription});
  }

  if (join === true) {
      return <GroupJoin info={info}/>
  }

  let rows = []
  let photos = [photo1, photo2, photo3];

  console.log(groupJson);

  for (let i = 0; i < 3; i++) {

    if (groupJson.groups[i].memberList.includes(1)) {
        let name = groupJson.groups[i].displayName;
        let description = groupJson.groups[i].description;

        rows.push(
            <React.Fragment>
            <ListItem alignItems="flex-start" onClick={(itemid, groupName, groupDescription) => 
                handleClick(i, name, description )}>
                <ListItemAvatar>
                <Avatar alt="Av" src={photos[i]} />
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

            {/* <ListItem alignItems="flex-start" onClick={(itemid, groupName, groupDescription) => handleClick("1", "Grupo 1", "Descricao grupo 1")}>
                <ListItemAvatar>
                <Avatar alt="Av" src={photo1} />
                </ListItemAvatar>
                <ListItemText
                primary="Grupo 1"
                />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start" onClick={(itemid, groupName, groupDescription) => handleClick("2", "Grupo 2", "Descricao grupo 2")}>
                <ListItemAvatar>
                <Avatar alt="Av" src={photo2} />
                </ListItemAvatar>
                <ListItemText
                primary="Grupo 2"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" onClick={(itemid, groupName, groupDescription) => handleClick("3", "Grupo 3", "Descricao grupo 3")}>
                <ListItemAvatar>
                <Avatar alt="Av" src={photo3} />
                </ListItemAvatar>
                <ListItemText
                primary="Grupo 3"
                />
            </ListItem> */}
            </List>
      </React.Fragment>
  );
}