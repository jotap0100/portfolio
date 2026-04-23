import React from 'react';

export const SenaiLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 320 100" 
    className={className}
    style={{ height: '36px', width: 'auto', display: 'block' }}
  >
    <rect width="320" height="100" fill="#1b5a9e"/>
    <g stroke="#ffffff" strokeWidth="5.5" strokeLinecap="square">
      <line x1="0" y1="18" x2="24" y2="18" />
      <line x1="0" y1="40" x2="24" y2="40" />
      <line x1="0" y1="62" x2="24" y2="62" />
      <line x1="0" y1="84" x2="24" y2="84" />
      <line x1="296" y1="18" x2="320" y2="18" />
      <line x1="296" y1="40" x2="320" y2="40" />
      <line x1="296" y1="62" x2="320" y2="62" />
      <line x1="296" y1="84" x2="320" y2="84" />
    </g>
    <text 
      x="160" 
      y="76" 
      fill="#ffffff" 
      fontSize="72" 
      fontWeight="900" 
      fontStyle="italic" 
      fontFamily="'Arial Black', 'Inter', -apple-system, sans-serif" 
      textAnchor="middle"
      letterSpacing="-2"
    >
      SENAI
    </text>
  </svg>
);
