import { FormErrors } from 'redux-form';
import { LoginFormParams } from './Login.d';

const LoginFormvalidate = (values: LoginFormParams): FormErrors<LoginFormParams> => {
    const errors: FormErrors<LoginFormParams> = {};

    if (!values.userName) {
      errors.userName = 'User name required';
    }

    if (!values.userPass) {
      errors.userPass = 'Password required';
    }
    return errors;
};
export default LoginFormvalidate;