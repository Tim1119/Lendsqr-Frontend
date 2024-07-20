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

const SidebarLink = ({ title, icon, link, toggleIcon, id, header, isActive }: SidebarLinkProps) => {
  return (
    <>
      {!header ? (
        <Link
          to={link}
          className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''} ${id === 26 ? 'sidebar__link__logout' : ''} ${id < 3 || id > 25 ? 'sidebar__link--large' : ''} ${id === 26 ? 'border--top' : ''}`}
        >
          {icon && (
            <span className="sidebar__link__icon-container">
              <img className="sidebar__link__icon" src={icon} alt={`${title}-icon`} />
            </span>
          )}
          <span className="sidebar__link__title">{title}</span>
          {toggleIcon && (
            <span className="sidebar__link__toggle">
              <img src={toggleIcon} alt="toggle-icon" />
            </span>
          )}
        </Link>
      ) : (
        <li className={`sidebar__link ${header ? 'sidebar__link__header' : ''}`}>
          <span className="sidebar__link__header">{title}</span>
        </li>
      )}
      {id === 26 && <small className="sidebar__link__version">v1.2.0</small>}
    </>
  );
};

export default SidebarLink;
