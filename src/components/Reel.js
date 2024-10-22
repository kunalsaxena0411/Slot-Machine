import React from 'react';

const Reel = ({ spinning }) => {
  return (
    <div className={`reel ${spinning ? 'spinning' : ''}`}>
      <div className="slot">?</div>
    </div>
  );
};

export default Reel;
