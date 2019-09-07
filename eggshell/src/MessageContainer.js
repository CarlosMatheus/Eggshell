import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Message from './Message'

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),

  },
}));

export default function SimplePopover({name, self, message}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(0);
  const [state, setState] = React.useState('closed');

  function handleClick(event) {
    console.log('click');
    setAnchorEl(event.currentTarget);
    setState('opened');
  }

  function handleClose() {
    console.log('asdf');
    
    setAnchorEl(null);
    setState('closed');
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  console.log(anchorEl);
 
  return (
    <div>
      {Message({name, self, message, onClick: handleClick})}
      {/* <Button aria-describedby={id} variant="contained" >
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {
          state == 'opened' ? (<Typography className={classes.typography}>The content of the Popover.</Typography>) : (<div></div>)
        }
      </Popover>
    </div>
  );
}