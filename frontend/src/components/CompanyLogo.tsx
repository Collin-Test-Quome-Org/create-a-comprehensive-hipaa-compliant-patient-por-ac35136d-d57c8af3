import React from 'react';

/**
 * CompanyLogo component renders the ShieldLink Health logo as per brand kit
 * Props: size (number, defaults to 36)
 */
export const CompanyLogo = ({ size = 36 }: { size?: number }) => (
  <img
    src={"/branding/assets/logo-0.png"}
    style={{ width: size, height: size }}
    draggable={false}
    aria-hidden="true"
  />
);
