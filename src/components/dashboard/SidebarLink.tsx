import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/dashboard/sidebar-link.scss';

interface SidebarLinkProps {
  title: string;
  icon?: string;
  link: string;
  toggleIcon?: string;
  id: number;
  header?: boolean;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, icon, link, toggleIcon, id, header, isActive }) => {
  return (
    <>
      {!header ? (
        <Link
          to={link}
          className={`sidebar-link ${isActive ? 'sidebar-link--active' : ''} ${id === 26 ? 'sidebar-link--logout' : ''} ${id < 3 || id > 25 ? 'sidebar-link--large' : ''} ${id === 26 ? 'sidebar-link--border-top' : ''}`}
        >
          {icon && (
            <span className="sidebar-link__icon-container">
              <img className="sidebar-link__icon" src={icon} alt={`${title}-icon`} />
            </span>
          )}
          <span className="sidebar-link__title">{title}</span>
          {toggleIcon && (
            <span className="sidebar-link__toggle">
              <img src={toggleIcon} alt="toggle-icon" />
            </span>
          )}
        </Link>
      ) : (
        <li className={`sidebar-link ${header ? 'sidebar-link--header' : ''}`}>
          <span className="sidebar-link__header">{title}</span>
        </li>
      )}
      {id === 26 && <small className="sidebar-link__version">v1.2.0</small>}
    </>
  );
};

export default SidebarLink;
