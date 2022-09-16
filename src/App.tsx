import React from 'react';

import './services/api';
import './styles/App.css';

import {UsersPresentationContainer} from "./containers";

const App = () => {
    return (
        <div>
            <UsersPresentationContainer/>
        </div>
    );
}

export default App;
