import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SuccessDialog extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {isOpen, handleClose} = this.props;
        return(
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"削除完了"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                記事の削除が完了しました。
              </DialogContentText>
            </DialogContent>
            <DialogActions>

              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
}

export default SuccessDialog;
