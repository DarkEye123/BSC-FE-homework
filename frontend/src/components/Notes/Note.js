import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import Draggable from 'react-draggable';
import { Note as StyledNote } from './styles';

const Note = ({ onStart, onStop, note }) => (
  <Draggable onStart={onStart} onStop={onStop}>
    <span>
      <VisuallyHidden>Note</VisuallyHidden>
      <StyledNote>{note.text}</StyledNote>
    </span>
  </Draggable>
);

export default Note;
