import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('should render a header element', () => {
    expect(shallow(<Header />).get(0).type).toEqual('header');
  });
});

