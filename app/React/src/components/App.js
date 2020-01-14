import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'; // react-router v4/v5

import PostIndex from '../containers/posts/index';
import PostAdd from '../containers/posts/add';
import PostEdit from '../containers/posts/edit';
import Test from '../containers/reduxtest/index';
import Navbar from './navbar';

export default function App() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/posts/index' render={ () => <PostIndex/> }/>
                    <Route exact path='/posts/add' render={ () => <PostAdd/> }/>
                    <Route exact path='/posts/edit/:id' render={ (props) => <PostEdit {...props}/> }/>
                    <Route path='/Test' render={ () => <Test/> }/>
                </Switch>
            </div>
        );
}
