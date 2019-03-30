import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, fireEvent, render, wait } from 'react-testing-library';
import Login from '..';
import { LOGIN_MUTATION, ACTIVE_USER_QUERY } from '../../../resolvers';
import { createClient, createPage } from '../../../testUtils/client';

const VALID_PASSWORD = '123qwer684a34sf';
const INVALID_PASSWORD = 'abrakadabra';
const EMAIL = 'test@tester.com';
const UID = '1234';

const mocks = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: { email: EMAIL, password: VALID_PASSWORD },
    },
    result: { data: { signIn: { id: UID, email: EMAIL, __typename: 'User' } } },
  },
  {
    request: {
      query: LOGIN_MUTATION,
      variables: { email: EMAIL, password: INVALID_PASSWORD },
    },
    error: new Error('shit happens'),
  },
];

const page = (history = {}, client = createClient(mocks)) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createPage(client, <MemoryRouter>{Login(history)}</MemoryRouter>);

afterEach(cleanup);

describe('login tests', () => {
  it('renders', () => {
    const { getByTestId } = render(page());
    expect(getByTestId('loginpage')).toMatchSnapshot();
  });

  it('validates', async () => {
    const history = { push: jest.fn() };
    const client = createClient(mocks);

    const { getByTestId } = render(page(history, client));
    const signInBtn = getByTestId('signin');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: 'omacka' } });
    fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
    await wait();
    expect(signInBtn).toBeDisabled();
  });

  it('can log in', async () => {
    const history = { push: jest.fn() };
    const client = createClient(mocks);

    const { getByTestId } = render(page(history, client));
    const signInBtn = getByTestId('signin');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: EMAIL } });
    fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
    await wait();
    fireEvent.click(signInBtn);

    await wait(() => {
      expect(client.cache.readQuery({ query: ACTIVE_USER_QUERY })).toEqual({
        activeUser: { id: UID, email: EMAIL, __typename: 'User' },
      });
    });
  });

  it('it shows BE error', async () => {
    const client = createClient(mocks);
    const { getByTestId } = render(page({}, client));
    const signInBtn = getByTestId('signin');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: EMAIL } });
    fireEvent.change(passwordInput, { target: { value: INVALID_PASSWORD } });
    await wait();
    fireEvent.click(signInBtn);

    await wait(() => {
      expect(getByTestId('graphql-error').textContent).toMatchInlineSnapshot('"Problem!Network error: shit happens"');
    });
  });
});
