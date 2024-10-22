import React from 'react';

const SpinButton = ({ onSpin, spinning }) => {
  return (
    <button onClick={onSpin} disabled={spinning}>
      {spinning ? 'Spinning...' : 'Spin'}
    </button>
  );
};

export default SpinButton;
