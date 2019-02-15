import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('should be defined', () => {
    expect(Avatar).toBeDefined();
  });

  it('should render an img element', () => {
    expect(shallow(<Avatar src="test.png" />).get(0).type).toEqual('img');
  });
});

