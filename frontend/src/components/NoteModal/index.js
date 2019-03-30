import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StyledModal, StyledNote } from './styles';
import { Button } from '..';

const DEFAULT_TEXT = 'Write Here';

const Modal = ({ isOpen, onDismiss, mutate }) => {
  const el = createRef(null);
  const [noteText, setNoteText] = useState(DEFAULT_TEXT);
  const { t } = useTranslation();
  return (
    <StyledModal
      className="ReactModal"
      isOpen={isOpen}
      contentLabel="Create Note Modal"
      closeTimeoutMS={350}
      onRequestClose={(event) => {
        console.log(el.current.textContent);
        setNoteText(DEFAULT_TEXT);
        if (onDismiss) {
          event.stopPropagation();
          onDismiss();
        }
      }}
    >
      <StyledNote contentEditable suppressContentEditableWarning={true} onClick={() => setNoteText('')} ref={el}>
        {t(noteText)}
      </StyledNote>
      <Button>{t('Confirm')}</Button>
    </StyledModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  mutate: PropTypes.func.isRequired,
};

export default Modal;
