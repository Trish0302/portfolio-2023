import React from 'react';
import NavLink from '../atoms/NavLink';

interface NavItemProps {
  id: number;
  title: string;
  icon: string;
  active: boolean;
  onClick: (id: number) => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  id, 
  title, 
  icon, 
  active, 
  onClick 
}) => {
  return (
    <li className={`nav__item ${active ? 'active' : ''}`}>
      <NavLink 
        href={`#${title.toLowerCase()}`} 
        dataId={id.toString()} 
        isActive={active}
        onClick={() => onClick(id)}
      >
        <i className={icon}></i>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
