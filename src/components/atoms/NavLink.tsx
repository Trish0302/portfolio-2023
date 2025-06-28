import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  dataId: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = ({ 
  href, 
  children, 
  dataId, 
  isActive = false, 
  onClick 
}: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`nav__link ${isActive ? 'active' : ''}`}
      data-id={dataId}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
