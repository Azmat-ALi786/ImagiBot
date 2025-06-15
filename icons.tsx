import React from 'react';

export const RobotIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className || "w-10 h-10 inline-block mr-2 text-red-500"}
  >
    <path d="M12 2a2 2 0 00-2 2c0 .21.03.41.09.6H6.5A2.5 2.5 0 004 7.12V10H2.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H4v3.88A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V14h1.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H20V7.12A2.5 2.5 0 0017.5 4.6h-3.59c.05-.19.09-.39.09-.6a2 2 0 00-2-2zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 8h10v2H7V8zm10 4H7v2h10v-2zm-5.5 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);

export const LightbulbIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className || "w-10 h-10 inline-block mr-2 text-red-500"}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-2 9h4v1h-4v-1zm0 2h4v1h-4v-1z" />
    <path d="M11 7h2v3h-2z" opacity="0.6"/>
  </svg>
);

export const SparkleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className || "w-5 h-5"}
  >
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.463 3.525c-.507.518-.092 1.447.636 1.62l4.537.957 1.957 4.594c.307.718 1.35.718 1.657 0l1.957-4.594 4.537-.957c.728-.173 1.143-1.102.636-1.62l-3.463-3.525-4.753-.39-1.83-4.401z" clipRule="evenodd" />
  </svg>
);

export const ModernAiIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className || "w-10 h-10 inline-block mr-2 text-red-500"} // Default class
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M16.24 7.76C15.07 6.59 13.53 6 12 6s-3.07.59-4.24 1.76L6.34 9.17A7.96 7.96 0 0112 8c1.66 0 3.14.51 4.45 1.34l-1.41 1.41C14.32 10.25 13.19 10 12 10c-1.19 0-2.32.25-3.33.67l-1.42-1.42C8.3 8.51 9.78 8 11.43 8c.17 0 .34.01.5.02C12.43 5.58 14.53 4 17 4c.46 0 .91.05 1.34.14l-1.54 1.54c-.1-.04-.2-.08-.3-.1L16.24 7.76zm-8.48 8.48C8.93 17.41 10.47 18 12 18s3.07-.59 4.24-1.76l1.42 1.42A7.96 7.96 0 0112 20c-1.66 0-3.14-.51-4.45-1.34l1.41-1.41c.72.51 1.57.85 2.47 1.02l-.57 1.71A7.99 7.99 0 017 16c-.46 0-.91-.05-1.34-.14l1.54-1.54c.1.04.2.08.3.1L7.76 16.24zM12 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
    {/* Simplified abstract inner elements inspired by interconnectedness. The paths above are a placeholder example. 
        A better abstract design: six overlapping "petals" or "blades" forming a circle.
    */}
    <path d="M12,5.5A6.5,6.5 0 0,0 5.5,12A6.5,6.5 0 0,0 12,18.5A6.5,6.5 0 0,0 18.5,12A6.5,6.5 0 0,0 12,5.5 M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3Z" opacity="0.3"/>
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
    <path transform="rotate(30 12 12)" d="M11.5,4 A7.5,7.5 0 0 1 12.5,4 A7.5,7.5 0 0 1 11.5,4 M11,2 L13,2 L16,10 L13,10 L11,10 L8,10 L11,2 Z"/>
    <path transform="rotate(90 12 12)" d="M11.5,4 A7.5,7.5 0 0 1 12.5,4 A7.5,7.5 0 0 1 11.5,4 M11,2 L13,2 L16,10 L13,10 L11,10 L8,10 L11,2 Z"/>
    <path transform="rotate(150 12 12)" d="M11.5,4 A7.5,7.5 0 0 1 12.5,4 A7.5,7.5 0 0 1 11.5,4 M11,2 L13,2 L16,10 L13,10 L11,10 L8,10 L11,2 Z"/>
    {/* This is a more complex abstract design. The previous simple one was more of a placeholder.
    This creates a hexagonal / flower-like pattern.
    Actual implementation will use a cleaner, more abstract path.
    Final version for the commit will be a cleaner path.
    Let's use a path that generates a stylized six-petal flower or abstract gear.
    */}
    <path d="M12 2.5C11.31 2.5 10.68 2.67 10.11 2.97L12 7.04L13.89 2.97C13.32 2.67 12.69 2.5 12 2.5z M17.03 6.11L12.96 12L17.03 17.89C17.33 17.32 17.5 16.69 17.5 16C17.5 14.04 16.46 12.35 14.83 11.39L17.03 6.11z M6.97 6.11L9.17 11.39C7.54 12.35 6.5 14.04 6.5 16C6.5 16.69 6.67 17.32 6.97 17.89L2.96 12L6.97 6.11z M12 16.96L10.11 21.03C10.68 21.33 11.31 21.5 12 21.5C12.69 21.5 13.32 21.33 13.89 21.03L12 16.96z"/>
  </svg>
);