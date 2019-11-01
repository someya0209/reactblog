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
                        Blog
                    </Typography>
                    <div>
                        <Link to="/posts/index">Post</Link>
                        <Link to="/Test">Test</Link>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;
