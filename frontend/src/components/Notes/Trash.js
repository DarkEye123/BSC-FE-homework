import React from 'react';
import { TrashWrapper } from './styles';
import TrashIcon from './TrashIcon';

const Trash = ({ name = 'trash' }) => (
  <TrashWrapper name={name}>
    <TrashIcon name={name} />
  </TrashWrapper>
);

export default Trash;
