import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import tasksReducer from './redux/reducers/tasks';

const store = createStore(tasksReducer);
const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root,
  );
}
