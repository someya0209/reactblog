import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class Navbar extends React.Component {
  render(){
    return(
        <AppBar position="static">
        <Toolbar>
        <Typography type="title" color="inherit">
        Typo
        </Typography>
        <div>
            <Link to="/Post/index">Home</Link>
            <Link to="/Test">About</Link>
        </div>
        </Toolbar>
        </AppBar>
    )
  }
}

export default Navbar;
