import { Image } from 'lucide-react';

export const CompanyLogo = ({ size = 36 }) => (
  <span className="inline-flex items-center">
    {/* Brand Kit logo, fallback to Lucide icon if needed */}
    <img src="/branding/assets/logo-0.png" style={{ width: size, height: size }} className="inline-block" />
  </span>
);
