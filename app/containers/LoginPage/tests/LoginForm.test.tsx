import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LoginForm } from '../LoginForm';
import { render } from '@testing-library/react';

const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
const mockDispatchfn = jest.fn();

describe('<LoginForm />', () => {
  let wrapper: any;

  const props: any = {
    handleSubmit: jest.fn(),
  };

  it('defines the component', () => {
    wrapper = render(
      <Provider store={mockStore()}>
        <LoginForm {...props} dispatch={mockDispatchfn} />
      </Provider>,
    );
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it('renders form component', () => {
    expect(wrapper.find('[form="loginForm"]').first()).toHaveLength(1);
  });
});