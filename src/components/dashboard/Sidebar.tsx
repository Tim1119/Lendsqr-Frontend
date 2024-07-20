import { SidebarNavigationData } from '../../utils/SidebarNavigation';
import SidebarLink from './SidebarLink';
import { useLocation } from 'react-router-dom';
import '../../styles/components/dashboard/sidebar.scss';
import lendsqrLogo from '../../assets/images/logo.svg';
import closeIcon from '../../assets/icons/navbar/close.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname: string = useLocation().pathname;

  const isRouteActive = (route: string) => {
    if (pathname === '/dashboard' && route === '/dashboard') {
      return true;
    }
    const path = route.split('/')[2];
    return Boolean(pathname.includes(path));
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <div>
          <img className="sidebar__logo" src={lendsqrLogo} alt="logo" />
        </div>
        <div className="sidebar__header__close-icon-container" onClick={toggleSidebar}>
          <img src={closeIcon} className="sidebar__header__close-icon" alt="close" />
        </div>
      </div>

      {SidebarNavigationData.map((sidebarLinkData, index) => (
        <div key={index}>
          <SidebarLink
            key={index}
            title={sidebarLinkData.title}
            icon={sidebarLinkData.icon}
            link={sidebarLinkData.link}
            toggleIcon={sidebarLinkData.toggleIcon}
            id={sidebarLinkData.id}
            header={sidebarLinkData.header}
            isActive={isRouteActive(sidebarLinkData.link)}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
