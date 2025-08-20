import * as React from 'react';

// Brand Kit: logo-0 is a shield-shaped icon with blue and slate split, center lock symbol
export const CompanyLogo = ({ size = 36 }: { size?: number }) => (
  <img
    src={require('/branding/assets/logo-0.png')}
    style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle' }}
    draggable={false}
  />
);
