import React from 'react';
import { render } from 'react-dom';

import './../css/style.css';

import Hello from './Hello';

const App = () => (<div><Hello /></div>)

render(
    <App />,
    document.getElementById('app')
);