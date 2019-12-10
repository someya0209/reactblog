import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CheckDialog extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {isOpen, OkHandleClose, CanselHandleClose} = this.props;
        return(
          <Dialog
            open={isOpen}
            onClose={CanselHandleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"確認"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                記事を削除しますか。
              </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={OkHandleClose} color="primary" >
                 OK
                </Button>
                <Button onClick={CanselHandleClose} color="primary" autoFocus>
                Cansel
                </Button>
            </DialogActions>
          </Dialog>
        );
    }
}

export default CheckDialog;
