import React from 'react';

export const X = ({ ...props }) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fechar"
      {...props}
    >
      <path d="M0.266 8L3.374 3.968L3.36 4.458L0.406 0.649999H1.526L3.948 3.8L3.528 3.786L5.95 0.649999H7.042L4.06 4.5L4.074 3.968L7.21 8H6.076L3.514 4.64L3.906 4.696L1.386 8H0.266Z" />
    </svg>
  );
};
