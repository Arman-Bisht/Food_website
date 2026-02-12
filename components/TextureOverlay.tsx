import React from 'react';

export const TextureOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay bg-noise"></div>
  );
};