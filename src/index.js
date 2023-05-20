import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
import Home from "./pages/home/home";
import LatestNews from "./pages/latest-news/latest-news";
import PopularNews from "./pages/popular-news/popular-news";

ReactDOM.render(
    <Provider store={store}>
        <App>
            <PopularNews/>
        </App>
    </Provider>,
    document.getElementById('root')
);
