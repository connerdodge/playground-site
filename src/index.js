import React from 'react';
import ReactDOM from 'react-dom';
import 'src/css/index.scss';
import Playground from 'src/js/Playground';
import * as serviceWorker from 'src/js/services/serviceWorker';

ReactDOM.render(<Playground />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
