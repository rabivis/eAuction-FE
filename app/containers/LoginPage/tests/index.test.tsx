import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import 'jest-styled-components';

import LoginPage from '../index';

const renderer = createRenderer();

describe('<LoginPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<LoginPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
