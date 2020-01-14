import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Form from './Form';

class PostAdd extends React.Component {
    constructor(props) {
        super(props);
        const {postAddHandleSubmit} = this.props;
    }
    submitAddData = values => {
        this.props.postAddHandleSubmit(values);
    };
    render(){
        return(
            <div>
                <Form
                    onSubmit={this.submitAddData}
                />
            </div>
        )
    }
}


export default PostAdd;
