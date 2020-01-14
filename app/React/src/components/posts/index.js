import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SuccessDialog from '../ui/SuccessDialog';
import CheckDialog from '../ui/CheckDialog';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const { fetchRequest, postDelete, setSuccessDialogOpen, setCheckDialogOpen} = props;
        fetchRequest();
        console.log(props);
    }

    deleteHandleClick = (event, id) => {
        this.props.postDelete(id);
    };
    handleSuccessOpen = () => {
        this.props.setSuccessDialogOpen(true);
    };
    handleSuccessClose = () => {
        this.props.fetchRequest();
        this.props.setSuccessDialogOpen(false);
    };
    //なぜか見つからないエラーが出るため保留
    handleCheckOpen = event => {
        this.props.setCheckDialogOpen(true);
    };
    handleCheckOkClose = (e, id) => {
        this.props.postDelete(id);
        this.props.setCheckDialogOpen(false);
    };
    handleCheckCanselClose = () => {
        this.props.setCheckDialogOpen(false);
    };

    render(){
        const { posts, postDelete, deleteDialogOpen, checkDialogOpen} = this.props;
        return(
            <div>
                <Typography variant="h5" component="h1">
                    Blog posts
                </Typography>
                <div>
                    {
                        posts.map(function(post, i) {
                            return (
                                <Card key={post.Post.id}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {post.Post.title}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {post.Post.body}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {post.Post.created}
                                        </Typography>
                                        <Link to={"/posts/edit/"+post.Post.id}>編集</Link>
                                        <Button
                                            color="primary"
                                            onClick={() => postDelete(post.Post.id)}
                                        >
                                            削除
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })
                    }
                </div>
                <SuccessDialog
                    isOpen = {deleteDialogOpen}
                    handleClose = {this.handleSuccessClose}
                />
                <CheckDialog
                    isOpen = {checkDialogOpen}
                    OkHandleClose = {this.handleCheckOkClose}
                    CanselHandleClose = {this.handleCheckCanselClose}
                />
            </div>
        )
    }
}


export default PostIndex;
