import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <React.Suspense fallback={""}>
            <HashRouter>
                <App/>
            </HashRouter>
        </React.Suspense>
    </React.StrictMode>
);

