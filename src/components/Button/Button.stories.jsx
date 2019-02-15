import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../Typography/Typography';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('default', () => (
    <div>
      <div>
        <Typography type="h3">Flat</Typography>
        <Button>default</Button>&nbsp;
        <Button color="primary">primary</Button>&nbsp;
        <Button color="secondary">secondary</Button>
      </div>
      <div>
        <Typography type="h3">Outlined</Typography>
        <Button type="outlined">default</Button>&nbsp;
        <Button type="outlined" color="primary">primary</Button>&nbsp;
        <Button type="outlined" color="secondary">secondary</Button>
      </div>
      <div>
        <Typography type="h3">Small</Typography>
        <Button size="small">default</Button>&nbsp;
        <Button size="small" color="primary">primary</Button>&nbsp;
        <Button size="small" color="secondary">secondary</Button>
      </div>
    </div>
  ));
