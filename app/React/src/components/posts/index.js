import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        const { fetchRequest } = props;
        fetchRequest();
        console.log(props);
    }
    render(){
        const { posts } = this.props;
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
