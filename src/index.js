import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

ReactDOM.render(<App />, document.getElementById('app'));