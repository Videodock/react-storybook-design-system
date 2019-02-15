import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Header from './Header';

storiesOf('Header', module)
  .addParameters({
    info: {
      propTablesExclude: [Typography, Button],
    },
  })
  .add('default', () => (
    <Header>
      <Typography type="h2">This is the default header</Typography>
    </Header>
  ))
  .add('with buttons', () => (
    <Header>
      <Typography type="h2">List</Typography>
      <nav>
        <Button color="primary" type="outlined" size="small">
          [ ] Clear list
        </Button>
      </nav>
    </Header>
  ));
