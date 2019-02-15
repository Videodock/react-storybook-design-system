import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';

storiesOf('Typography', module)
  .add('default', () => (
    <div>
      <Typography type="h1">Heading 1.</Typography>
      <Typography type="h2">Heading 2.</Typography>
      <Typography type="h3">Heading 3.</Typography>
      <Typography type="h4">Heading 4.</Typography>
      <Typography type="h5">Heading 5.</Typography>
      <Typography type="h6">Heading 6.</Typography>
      <Typography>Body.</Typography>
    </div>
  ));
