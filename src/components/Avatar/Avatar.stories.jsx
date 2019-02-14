import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import img from './assets/avatar.png';

const avatar1 = <Avatar src={img} />;

storiesOf('Avatar', module)
  .add('squared', () => (
    avatar1
  ))
  .add('rounded', () => (
    <Avatar src={img} rounded />
  ))
  .add('circle', () => (
    <Avatar src={img} circle />
  ));
