import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { TrashWrapper } from './styles';
import TrashIcon from './TrashIcon';

const Trash = ({ name = 'trash' }) => (
  <TrashWrapper name={name}>
    <VisuallyHidden>Delete Note</VisuallyHidden>
    <TrashIcon name={name} />
  </TrashWrapper>
);

export default Trash;
