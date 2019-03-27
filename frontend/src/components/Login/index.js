import React from 'react';
import { Formik } from 'formik';
import { CenteredMain as Page, InputField, ErrorMessage, SpinningButton } from '..';
import { Mutation } from 'react-apollo';
import { Form } from './styles';
import LoginSchema from './validations';
import { ACTIVE_USER_QUERY, LOGIN_MUTATION } from '../../resolvers';

const update = (cache, { data: { signIn } }) => {
  const data = { activeUser: signIn };
  cache.writeQuery({ data, query: ACTIVE_USER_QUERY });
};

// Note: 'catch' statement is here due to red warnings made by graphql error response
const handleOnSubmit = mutation => async values => {
  try {
    await mutation({ variables: { email: values.email, password: values.password } });
    // Router.push(NOTES_PAGE);
  } catch (e) {}
};

const Login = () => (
  <Mutation mutation={LOGIN_MUTATION} update={update}>
    {(logIn, { data, loading, error }) => (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleOnSubmit(logIn)}
      >
        {() => (
          <Page>
            <ErrorMessage error={error} />
            <Form>
              <InputField label="Email" name="email" />
              <InputField label="Password" name="password" />
              <SpinningButton spin={loading} type="submit">
                Sign{loading && 'ing'} In
              </SpinningButton>
            </Form>
          </Page>
        )}
      </Formik>
    )}
  </Mutation>
);

export default Login;
