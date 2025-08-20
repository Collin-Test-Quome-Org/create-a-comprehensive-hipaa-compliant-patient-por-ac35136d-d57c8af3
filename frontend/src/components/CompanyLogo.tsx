import React from 'react';

export const CompanyLogo = ({ size = 36 }: { size?: number }) => (
  <img
    src={process.env.NODE_ENV === 'test' ? '' : '/branding/assets/logo-0.png'}
    style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle' }}
    draggable={false}
  />
);
