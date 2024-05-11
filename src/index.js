import React from 'react';
import ReactDOM from 'react-dom/client';
import {GoogleOAuthProvider} from '@react-oauth/google';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="966267690044-g3v5q9fcn1otnpcvemmpafcj4mm4n31g.apps.googleusercontent.com">
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </GoogleOAuthProvider>,
);