import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './init-content/App';
import Home from './pages/Home'
import * as serviceWorker from './init-content/serviceWorker';

// Comment one of the following two lines to toggle between content from create-react-app and your content
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Home/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
