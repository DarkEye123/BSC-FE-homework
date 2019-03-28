import React from 'react';
import { storiesOf } from '@storybook/react';
import Draggable from 'react-draggable';
import Grid from './Grid';

import { Note } from '../src/components';
import { Grid as Wrapper } from '../src/components/Notes/styles';

storiesOf('Note', module).add('draggable note', () => (
  <Wrapper>
    <Grid>
      <Draggable position={null}>
        <span>
          <Note>
            #1 Buy Dog Food!!! <br />
            #2 Take Randy from school
          </Note>
        </span>
      </Draggable>
      <Draggable>
        <span>
          <Note>
            #1 visit granpa <br />
            #2 go to cinema <br />
            #3 read react-tut
          </Note>
        </span>
      </Draggable>
      <Draggable>
        <span>
          <Note>
            #1 buy car <br />
            #2 see the sea <br />
            #3 kill some seagulls
          </Note>
        </span>
      </Draggable>
      <Draggable>
        <span>
          <Note>#1 Buy Cat Food!!!</Note>
        </span>
      </Draggable>
    </Grid>
  </Wrapper>
));
