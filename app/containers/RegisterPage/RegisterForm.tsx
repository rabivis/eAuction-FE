import React, { useEffect } from 'react';
import { Form, FormGroup, Button } from "reactstrap";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReduxFormInput from 'components/Inputs/ReduxFormInput';
import ReduxFormSelect from 'components/Inputs/ReduxFormSelect';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AccountTypes } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { submitUserRegister } from './actions';
import { createStructuredSelector } from 'reselect';
import {  makeSelectLoading, makeSelectError } from './selectors';
import RegisterFormvalidate from './RegisterFormvalidate';
import reducer from './reducer';
import saga from './saga';

interface Props {
    handleSubmit;
    pristine;
    submitting;
    isLoading;
};
const key = "register";

const stateSelector = createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

export function RegisterForm(props: Props) {

    const dispatch = useDispatch();
    const { handleSubmit, submitting, pristine, isLoading } = props;
    const {  loading, error } = useSelector(stateSelector);

    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    
    const localSubmithandle = (values: any) => {
        console.log({values});
        dispatch(submitUserRegister(values));
    }
    
    return (
        <Form onSubmit={handleSubmit(localSubmithandle)} noValidate={true}>
            <Field
                name="firstName"
                type="text"
                component={ReduxFormInput}
                label="First Name *"
                placeHolder="Enter First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={ReduxFormInput}
                label="Last Name *"
                placeHolder="Enter Last Name"
            />
            <Field
                name="email"
                type="text"
                component={ReduxFormInput}
                label="Email *"
                placeHolder="Enter Email"
            />
            <Field
                name="password"
                type="pasword"
                component={ReduxFormInput}
                label="User Password *"
                placeHolder="Enter User Password"
            />
            <Field
                name="confPassword"
                type="password"
                component={ReduxFormInput}
                label="User confirm password *"
                placeHolder="Enter confirm password"
            />
            <Field
                name="address"
                type="text"
                component={ReduxFormInput}
                label="Address *"
                placeHolder="Enter address"
            />
            <Field
                name="city"
                type="text"
                component={ReduxFormInput}
                label="City *"
                placeHolder="Enter City"
            />
            <Field
                name="state"
                type="text"
                component={ReduxFormInput}
                label="State *"
                placeHolder="Enter State"
            />
            <Field
                name="pin"
                type="text"
                component={ReduxFormInput}
                label="Pin Address *"
                placeHolder="Enter Pin Address"
            />
            <Field
                name="phone"
                type="text"
                component={ReduxFormInput}
                label="Phone *"
                placeHolder="Enter Phone"
            />
            
            <Field
                name="userType"
                type="text"
                values={AccountTypes}
                component={ReduxFormSelect}
                label="Account Type *"
                placeHolder="Please select account type"
            />
            
            <Button
                className="float-right"
                color="success"
                type="submit"
                style={{ marginRight: '10px' }}
                disabled={pristine || submitting}
            >
                {isLoading && <>Saving...</>}
                {!isLoading && <>Save</>}
            </Button>
            <br />
            <br />
            <br />
            <br />
        </Form>
    )
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'registerForm',
    validate: RegisterFormvalidate

})(RegisterForm);

export default connect(null)(form);