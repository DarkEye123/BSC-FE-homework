import React from 'react';
import PropTypes from 'prop-types';
import StyledErrorMessage from './styles';

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((e, i) => (
      <StyledErrorMessage key={i}>
        <p data-testid="graphql-error">
          <strong>Problem!</strong>
          {e.message.replace('GraphQL error: ', '')}
        </p>
      </StyledErrorMessage>
    ));
  }
  return (
    <StyledErrorMessage>
      <p data-testid="graphql-error">
        <strong>Problem!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </StyledErrorMessage>
  );
};

ErrorMessage.defaultProps = {
  error: {},
};

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
