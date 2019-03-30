import React from 'react';
import { Formik } from 'formik';
import { CenteredMain as Page, InputField, ErrorMessage, SpinningButton } from '..';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Form } from './styles';
import LoginSchema from './validations';
import { ACTIVE_USER_QUERY, LOGIN_MUTATION } from '../../resolvers';
import { PAGES } from '../../routes';

const update = (cache, { data: { signIn } }) => {
  const data = { activeUser: signIn };
  cache.writeQuery({ data, query: ACTIVE_USER_QUERY });
};

// Note: 'catch' statement is here due to red warnings made by graphql error response
const handleOnSubmit = (mutation, history) => async values => {
  try {
    await mutation({ variables: { email: values.email, password: values.password } });
    history.push(PAGES.notes);
  } catch (e) {}
};

// eslint-disable-next-line react/prop-types
const Login = ({ history }) => {
  const { t } = useTranslation();
  return (
    <Mutation mutation={LOGIN_MUTATION} update={update}>
      {(logIn, { loading, error }) => (
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleOnSubmit(logIn, history)}
        >
          {({ isValid }) => (
            <Page data-testid="loginpage">
              <ErrorMessage error={error} />
              <Form>
                <InputField data-testid="email" label="Email" name="email" />
                <InputField data-testid="password" label="Password" name="password" />
                <SpinningButton data-testid="signin" disabled={!isValid || loading} spin={loading} type="submit">
                  {t(`Sign${loading ? 'ing' : ''} In`)}
                </SpinningButton>
              </Form>
            </Page>
          )}
        </Formik>
      )}
    </Mutation>
  );
};

export default withRouter(Login);
