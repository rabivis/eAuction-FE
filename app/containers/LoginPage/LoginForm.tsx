import React, { useEffect } from 'react';
import { Form, FormGroup, Button, Row, Col } from "reactstrap";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import LoginFormvalidate from './LoginValidate'
import ReduxFormInput from 'components/Inputs/ReduxFormInput';
import { LoginFormParams } from './Login.d';
import { loginUserSubmit } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser, makeSelectLoading, makeSelectError } from './selectors';
import { useHistory } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';

interface Props {
    handleSubmit;
    pristine;
    submitting;
    isLoading;
};

const key = "login";


const stateSelector = createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

export function LoginForm(props: Props) {

    const dispatch = useDispatch();
    const { currentUser, loading, error } = useSelector(stateSelector);
    const history = useHistory();
    if (currentUser != undefined) {
        history.push("/");
    }
    
    const { handleSubmit, submitting, pristine, isLoading } = props;
    const localSubmithandle = (values: LoginFormParams) => {
        dispatch(loginUserSubmit(values))
    }

    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    return (
        <Form onSubmit={handleSubmit(localSubmithandle)} noValidate={true}>
            <Field
                name="userName"
                type="text"
                component={ReduxFormInput}
                label="User Name *"
                placeHolder="Enter User Name"

            />
            <Field
                name="userPass"
                type="password"
                component={ReduxFormInput}
                label="Password *"
                placeHolder="Enter Password"

            />
            <Row>
                <Col md="12">
                    <Button
                        className="btn btn-success placeicon"
                        color="success"
                        type="submit"
                        disabled={pristine || submitting}
                    >
                        {isLoading && <>Login...</>}
                        {!isLoading && <>Login</>}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'loginForm',
    validate: LoginFormvalidate
})(LoginForm);

export default connect(null)(form);


