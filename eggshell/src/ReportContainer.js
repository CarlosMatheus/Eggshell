import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { maxWidth } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div onClick={handleClick} >
      {/* <Button > */}
        Report
      {/* </Button> */}
      <Snackbar
        style={{maxWidth:'240px'}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Reported</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}