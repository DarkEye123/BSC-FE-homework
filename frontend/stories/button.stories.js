import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';

import { Button, SpinningButton } from '../src/components';

storiesOf('Button', module).add('normal button', () => (
  <Grid>
    <Button>Enabled Button</Button>
    <Button disabled>Disabled Button</Button>
  </Grid>
));
