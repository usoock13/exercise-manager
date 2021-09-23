import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../store/modules';
import { composeWithDevTools } from 'redux-devtools-extension';

import '../static/reset.css';
import '../static/global_style.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};

const makeStore = (initialState, options) => {
    const middlewares = []; // 미들웨어
    const enhancer = process.env.NODE_ENV === 'development' // 배포 환경일 경우
                     ? composeWithDevTools(applyMiddleware(...middlewares)) // 그렇지 않으면(개발 환경) 미들웨어와 dev tools 함께 사용
                     : compose(applyMiddleware(...middlewares)); // 미들웨어만 사용
    return createStore(reducer, initialState, enhancer);
}

export default createWrapper(makeStore, { debug: true }).withRedux(MyApp);