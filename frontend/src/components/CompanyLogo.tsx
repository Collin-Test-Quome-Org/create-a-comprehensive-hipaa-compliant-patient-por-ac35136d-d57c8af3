import { Shield } from 'lucide-react';

export const CompanyLogo = ({ size = 32 }: { size?: number }) => (
  <span className="inline-flex items-center justify-center" style={{ width: size, height: size }}>
    {/* Use brand kit: shield/lock combo, blue and slate */}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M24 5C30.6274 5 36 8.13401 36 12.5V21.5C36 32 24 43 24 43C24 43 12 32 12 21.5V12.5C12 8.13401 17.3726 5 24 5Z" fill="#1d4ed8"/>
        <path d="M24 5C30.6274 5 36 8.13401 36 12.5V21.5C36 32 24 43 24 43V5Z" fill="#cbd5e1"/>
        <rect x="18" y="17" width="12" height="12" rx="6" fill="#fff" stroke="#1d4ed8" strokeWidth="2"/>
        <rect x="22" y="21" width="4" height="7" rx="2" fill="#1d4ed8"/>
      </g>
    </svg>
  </span>
);
