import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import StyledErrorMessage from './styles';

const ErrorMessage = ({ error }) => {
  const { t } = useTranslation('BETrans');
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((e, i) => (
      <StyledErrorMessage key={i}>
        <p data-testid="graphql-error">
          <strong>{t('Problem')}!</strong>
          {t(e.message.replace('GraphQL error: ', ''))}
        </p>
      </StyledErrorMessage>
    ));
  }
  return (
    <StyledErrorMessage>
      <p data-testid="graphql-error">
        <strong>{t('Problem')}!</strong>
        {t(error.message.replace('GraphQL error: ', ''))}
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
