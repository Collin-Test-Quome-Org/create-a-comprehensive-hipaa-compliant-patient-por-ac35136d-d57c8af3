import * as React from 'react';

/**
 * CompanyLogo
 * Displays the primary ShieldLink Health logo (shield + lock)
 * Use size prop to control width/height in px
 */
export const CompanyLogo = ({ size = 40 }: { size?: number }) => (
  <img
    src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/branding/assets/logo-0.png` : '/branding/assets/logo-0.png'}
    style={{ width: size, height: size }}
    draggable={false}
  />
);