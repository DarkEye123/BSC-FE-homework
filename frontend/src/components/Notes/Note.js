import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import Draggable from 'react-draggable';
import { useTranslation } from 'react-i18next';
import { Note as StyledNote } from './styles';

const Note = ({
  onStart, onStop, note, onDoubleClick,
}) => {
  const { t } = useTranslation();
  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <span>
        <VisuallyHidden>{t('Note')}</VisuallyHidden>
        <StyledNote contentEditable suppressContentEditableWarning={true} onDoubleClick={onDoubleClick}>
          {note.text}
        </StyledNote>
      </span>
    </Draggable>
  );
};

export default Note;
