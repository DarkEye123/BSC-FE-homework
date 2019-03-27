import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik } from 'formik';
import { InputField } from '../src/components';
import Grid from './Grid';

storiesOf('InputField', module)
  .add('without label', () => (
    <Formik initialValues={{ data: '' }}>
      {() => (
        <Grid>
          <InputField placeholder="enabled" name="data" />
          <InputField disabled placeholder="disabled" name="data" />
        </Grid>
      )}
    </Formik>
  ))
  .add('with label', () => (
    <Formik initialValues={{ data: '' }}>
      {() => (
        <Grid>
          <InputField label="enabled" name="data" />
          <InputField disabled label="disabled" name="data" />
        </Grid>
      )}
    </Formik>
  ))
  .add('with label and text', () => (
    <Formik initialValues={{ data: 'text' }}>
      {() => (
        <Grid>
          <InputField label="enabled" name="data" />
          <InputField disabled label="disabled" name="data" />
        </Grid>
      )}
    </Formik>
  ));
