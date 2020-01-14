import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import EditForm from './editForm';

class PostEdit extends React.Component {
    constructor(props) {
        super(props);
        const {postEditHandleSubmit, PostSearch} = this.props;
        let {id} = props.match.params;
        PostSearch(id);
    }
    submitEditData = values => {
        this.props.postEditHandleSubmit(values);
    };
    render(){
        const {postdata} = this.props;
        return(
            <div>
                <EditForm
                    onSubmit={this.submitEditData}
                    postData={postdata}
                />
            </div>
        )
    }
}


export default PostEdit;
