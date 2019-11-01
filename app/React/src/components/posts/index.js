import React from 'react'

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <h1>Blog posts</h1>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Created</th>
                    </tr>

                    
                </table>
            </div>
        )
    }
}


export default PostIndex;
