import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';

export default function App({ task, tasks, inputTask, addTask }) {
        return (
        <div>
                <AppBar position="static">
                <Toolbar>
                <Typography type="title" color="inherit">
                Typo
                </Typography>
                </Toolbar>
                </AppBar>
                <div style={{ padding: '16px' }}>
                        <Input  onChange={(e) => inputTask(e.target.value)} />
                        <Button color="primary" onClick={() => addTask(task)} >add</Button>
                        <List>
                        <ul>
                        {
                        tasks.map(function(item, i) {
                        return (
                        <li key={i}>{item}</li>
                        );
                        })
                        }
                        </ul>
                        </List>
                </div>
        </div>
        );
}
