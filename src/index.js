import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@pages/Base/app'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react'
import {HashRouter,Route,Routes} from 'react-router-dom' 
import mobxStore from '@mobx/index'
import 'element-theme-default';


ReactDOM.render(
	<Provider {...mobxStore}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
