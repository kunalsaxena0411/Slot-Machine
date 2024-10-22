import React, { useState } from 'react';
import Reel from './Reel';
import SpinButton from './SpinButton';
import Rewards from './Rewards';

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [rewards, setRewards] = useState([]);

  const items = [
    { name: "Pistol", type: "weapon", rarity: "common", count: 1 },
    { name: "First Aid Kit", type: "consumable", rarity: "rare", count: 1 },
    { name: "Steel", type: "material", rarity: "uncommon", count: 3 },
    { name: "Grenade", type: "weapon", rarity: "epic", count: 2 },
    { name: "Med Kit", type: "consumable", rarity: "legendary", count: 1 },
  ];

  const spinReels = () => {
    setSpinning(true);
    setTimeout(() => {
      const result = items[Math.floor(Math.random() * items.length)];
      setRewards([result]);
      setSpinning(false);
    }, 2000); // Spinning for 2 seconds
  };

  return (
    <div>
      <div className="slot-machine">
        <Reel spinning={spinning} />
        <Reel spinning={spinning} />
        <Reel spinning={spinning} />
      </div>
      <SpinButton onSpin={spinReels} spinning={spinning} />
      <Rewards rewards={rewards} />
    </div>
  );
};

export default SlotMachine;
