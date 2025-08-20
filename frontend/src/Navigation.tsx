import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { CompanyLogo } from '@/components/CompanyLogo';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/login', label: 'Log In' },
  { to: '/signup', label: 'Sign Up', highlight: true },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'px-2 py-1 bg-transparent hover:bg-[#cbd5e1]')}> 
                <Link to="/">
                  <CompanyLogo size={36} />
                  <span className="ml-2 font-bold text-xl align-middle font-['Roboto'] tracking-tight text-[#1d4ed8]">ShieldLink Health</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(link => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild className={cn(
                  navigationMenuTriggerStyle(),
                  link.highlight && 'bg-[#1d4ed8] text-white hover:bg-blue-600',
                  pathname === link.to ? 'border-b-4 border-[#1d4ed8]' : ''
                )}>
                  <Link to={link.to} id={`nav-${link.label.toLowerCase().replace(/ /g, '-')}`}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
