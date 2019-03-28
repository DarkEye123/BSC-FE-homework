import React from 'react';

const Note = ({
  onStart, onStop, text, id,
}) => (
  <Draggable onStart={onStart} onStop={onStop} key={id}>
    <span>
      <Note>{text}</Note>
    </span>
  </Draggable>
);

export default Note;
