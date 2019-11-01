import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'; // react-router v4/v5

import PostIndex from '../containers/posts/index';
import Test from '../containers/reduxtest/index';
import Navbar from './navbar';

export default function App() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/posts/index' component={ () => <PostIndex/> }/>
                    <Route path='/Test' component={ () => <Test/> }/>
                </Switch>
            </div>
        );
}
