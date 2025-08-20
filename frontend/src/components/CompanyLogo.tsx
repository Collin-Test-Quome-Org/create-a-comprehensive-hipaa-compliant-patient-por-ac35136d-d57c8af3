export const CompanyLogo = ({ size = 32 }: { size?: number }) => (
  <img
    src={require('/branding/assets/logo-0.png')}
    style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle' }}
  />
);
