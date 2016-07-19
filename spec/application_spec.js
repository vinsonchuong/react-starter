import React from 'react';
import {shallow} from 'enzyme';

import Application from '../src/application';

describe('Application', () => {
  it('renders the given text', () => {
    const application = shallow(<Application text="Foo" />);
    expect(application.text()).toBe('Foo');
  });
});
