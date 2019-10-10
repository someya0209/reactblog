import React from 'react'
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
  render(){
      const { task, tasks, inputTask, addTask } = this.props;

    return(
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
    )
  }
}


export default Test;
