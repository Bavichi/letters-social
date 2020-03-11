import React from 'react';
import { render } from 'react-dom';

import { history } from './history';
import Route from './components/router/Route';
import Router from './components/router/Router';
import App from './app';
import Home from './pages/Home';
import SinglePost from './pages/Post';
import NotFound from './pages/404';

import './shared/crash';
import './shared/service-worker';
import './shared/vendor';
// NOTE: this isn't ES*-compliant/possible, but works because we use Webpack as a build tool
import './styles/styles.scss';

export const renderApp = (state, callback = () => {}) => {
    render(
        <Router {...state}>
            <Route path="" component={App}>
                <Route path="/" component={Home} />
                <Route path="/posts/:postId" component={SinglePost} />
                <Route path="*" component={NotFound} />  
            </Route>
        </Router>,
        document.getElementById('app'),
        callback
    );
};
  
  let state = {  // ⇽--- 创建一个状态对象来跟踪地址和用户
    location: window.location.pathname,
  };
  history.listen(location => {  // ⇽--- 当地址变化时触发并更新路由器，促使应用使用新数据重新渲染
      state = Object.assign({}, state, {
          location: location.pathname
      });
      renderApp(state);
  });
  
  renderApp(state);  
