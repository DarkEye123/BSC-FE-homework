import React from 'react';
import { Formik } from 'formik';
import { CenteredMain as Page, InputField } from '..';

const Login = () => (
  <Formik initialValues={{ email: '', password: '' }}>
    {() => (
      <Page>
        {/* <Form> */}
        <InputField label="Email" name="email" />
        <InputField label="Password" name="password" />
        {/* </Form> */}
      </Page>
    )}
  </Formik>
);

export default Login;
