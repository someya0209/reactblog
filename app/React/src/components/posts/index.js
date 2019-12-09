import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const { fetchRequest, postDelete } = props;
        fetchRequest();
        console.log(props);
    }
    deleteHandleClick = (event, id) => {
        this.props.postDelete(id);
    };
    render(){
        const { posts, postDelete } = this.props;
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
                                        <Button
                                            color="primary"
                                        >
                                            編集
                                        </Button>
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
            </div>
        )
    }
}


export default PostIndex;
