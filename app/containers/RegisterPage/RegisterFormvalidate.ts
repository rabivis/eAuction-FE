import { FormErrors } from 'redux-form';
import { RegisterFormParams } from './Register';

const RegisterFormvalidate = (values: RegisterFormParams): FormErrors<RegisterFormParams> => {
    const errors: FormErrors<RegisterFormParams> = {};

    if (!values.firstName) {
      errors.firstName = 'Customer name is required';
    } else if (!/^[a-zA-Z\s]+$/i.test(values.firstName)) {
      errors.firstName = 'First Name invalid'
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (!values.confPassword) {
      errors.confPassword = 'Confirm  Password is required';
    } else if(values.confPassword !== values.password){
      errors.password = 'Confirm password does not match'
    }

    if (!values.address) {
      errors.address = 'Address is required';
    }

    if (!values.city) {
      errors.city = 'City is required';
    }

    if (!values.state) {
      errors.state = 'State is required';
    }

    if (!values.pin) {
      errors.pin = 'Pin is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.phone) {
      errors.phone = 'Contact Number is required';
    } else if (isNaN(Number(values.phone))) {
      errors.phone = 'Must be a number';
    } else if (values.phone.length !== 10) {
      errors.phone = 'Must be 10 characters';
    }

    if(!values.userType){
      errors.userType = "User Type is required";
    }
    return errors;
};
export default RegisterFormvalidate;