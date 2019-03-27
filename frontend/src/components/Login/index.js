import React from 'react';
import { Formik } from 'formik';
import { CenteredMain as Page, InputField } from '..';
import { Form } from './styles';
import LoginSchema from './validations';

const Login = () => (
  <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema}>
    {() => (
      <Page>
        <Form>
          <InputField label="Email" name="email" />
          <InputField label="Password" name="password" />
        </Form>
      </Page>
    )}
  </Formik>
);

export default Login;
