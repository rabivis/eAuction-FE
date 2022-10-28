/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Container } from 'reactstrap';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Sidebar from 'components/Sidebar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: block;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - eAuction"
        defaultTitle="eAuction"
      >
        <meta name="description" content="eAuction" />
      </Helmet>
      <div className="container-fluid px-0" id="bg-div">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-12">
            <div className="card card0">
              <div className="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </AppWrapper>
  );
}
export default hot(App);
