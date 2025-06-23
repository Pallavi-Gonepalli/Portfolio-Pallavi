
import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#e879f9', '#c084fc', '#a855f7', '#9333ea', '#7c3aed', '#6366f1'];
    const newPetals: Petal[] = [];

    for (let i = 0; i < 15; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
      });
    }

    setPetals(newPetals);

    const animatePetals = () => {
      setPetals(prev => prev.map(petal => ({
        ...petal,
        y: petal.y > window.innerHeight + 50 ? -50 : petal.y + petal.speed,
        x: petal.x + Math.sin(petal.y / 100) * 0.5,
        rotation: petal.rotation + petal.rotationSpeed,
      })));
    };

    const interval = setInterval(animatePetals, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute opacity-70"
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            backgroundColor: petal.color,
            borderRadius: '50% 0 50% 0',
            transform: `rotate(${petal.rotation}deg)`,
            transition: 'all 0.05s linear',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
