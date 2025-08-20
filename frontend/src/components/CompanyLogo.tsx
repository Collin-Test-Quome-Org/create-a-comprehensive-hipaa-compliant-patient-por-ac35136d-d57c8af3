// Brand logo: shield+lock, minimal, blue/slate
export const CompanyLogo = ({ size = 36 }: { size?: number }) => (
  <span style={{ display: 'inline-block', width: size, height: size }}>
    <img
      src={require('/branding/assets/logo-0.png')}
      style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle', margin: 0 }}
      draggable={false}
    />
  </span>
);
