import Link from 'next/link';
import { NavigationLink } from '../header-config';

type NavLinkProps = NavigationLink;

export const NavLink: React.FC<NavLinkProps> = ({ href, label, icon, external = false }) => (
  <Link
    href={href}
    className='flex items-center gap-1 underline-offset-4 hover:underline'
    target={external ? '_blank' : '_self'}
  >
    {icon}
    {label}
  </Link>
);
