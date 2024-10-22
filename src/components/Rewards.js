import React from 'react';

const Rewards = ({ rewards }) => {
  return (
    <div className="rewards">
      {rewards.length > 0 ? (
        <div>
          <h2>Reward:</h2>
          <p>Item: {rewards[0].name}</p>
          <p>Type: {rewards[0].type}</p>
          <p>Rarity: {rewards[0].rarity}</p>
          <p>Count: {rewards[0].count}</p>
        </div>
      ) : (
        <h2>Spin to get a reward!</h2>
      )}
    </div>
  );
};

export default Rewards;
