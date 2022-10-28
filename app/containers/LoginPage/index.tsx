import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from './LoginForm';
import Helpdesk from 'components/Helpdesk';
import { createStructuredSelector } from 'reselect';
import { makeSelectError } from './selectors';
import { useSelector } from 'react-redux';

const stateSelector = createStructuredSelector({
    error: makeSelectError(),
});

export default function LoginPage() {

    const { error } = useSelector(stateSelector);
    return (
        <>
            <Helmet>
                <title>Sign In</title>
                <meta
                    name="description"
                    content="Login - eAuction"
                />
            </Helmet>
            <Helpdesk 
                message={(error)?'Invalid user name & password':false}
                messageType={ (error)? 'danger': ''}
            />
            <div className="row justify-content-center">
                <div className="text-center" id="test">Sign In</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11">
                    <div className="form-card">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}