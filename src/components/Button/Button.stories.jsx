import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <div>
      <p>
        <Button>default flat</Button>
        <Button color="primary">primary flat</Button>
        <Button color="secondary">secondary flat</Button>
      </p>
      <p>
        <p>
          <Button type="outlined">default outlined</Button>
          <Button type="outlined" color="primary">primary outlined</Button>
          <Button type="outlined" color="secondary">secondary outlined</Button>
        </p>
      </p>
    </div>
  ));
