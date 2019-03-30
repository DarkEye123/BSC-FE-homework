import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { TrashWrapper } from './styles';
import TrashIcon from './TrashIcon';

const Trash = ({ name = 'trash' }) => {
  const { t } = useTranslation();
  return (
    <TrashWrapper name={name}>
      <VisuallyHidden>{t('Delete Note')}</VisuallyHidden>
      <TrashIcon name={name} />
    </TrashWrapper>
  );
};

Trash.propTypes = {
  name: PropTypes.string,
};

export default Trash;
