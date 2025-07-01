import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router"
import './i18n'
import {I18nextProvider} from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Suspense fallback={<span>Loading...</span>}>
              <App/>
        </Suspense>
    </BrowserRouter>
);
