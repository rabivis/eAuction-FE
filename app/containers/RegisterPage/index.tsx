import React from 'react';
import { Helmet } from 'react-helmet-async';
import RegisterForm from './RegisterForm';
import Helpdesk from 'components/Helpdesk';

export default function RegisterPage() {
    return (
        <>
            <Helmet>
                <title>Sign Up</title>
                <meta
                    name="description"
                    content="Registration form for eAuction"
                />
            </Helmet>
            <Helpdesk />
            <div className="row justify-content-center">
                <div className="text-center" id="test">Sign Up</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11">
                    <div className="form-card">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    );
}