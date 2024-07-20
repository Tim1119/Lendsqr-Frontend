import '../../styles/components/dashboard/navbar.scss'
import lendsqrLogo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/navbar/search.svg'
import bellIcon from '../../assets/icons/navbar/bell.svg'
import profilePicture from '../../assets/icons/navbar/profile-picture.png'
import chevronDown from '../../assets/icons/navbar/chevron.svg'
import { Link } from 'react-router-dom'
import hamBurgerIcon from '../../assets/icons/navbar/menu.svg'
import closeIcon from '../../assets/icons/navbar/close.svg'


interface NavbarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }

const Navbar = ({ isOpen, toggleSidebar }:NavbarProps) => {
  return (
    <nav className="navbar">
        <div className='navbar__left-container' >
        <div onClick={toggleSidebar} className="navbar__hamburger-large-screen-container">
            <img src={hamBurgerIcon}  className='navbar__hamburger-large-screen' alt="hamburger" />
        </div>
        <div>
            <Link to='/dashboard/users' >
                
            <img src={lendsqrLogo} className='navbar__logo' alt="lendsqr-logo" />
                 </Link>
        </div>
        </div>
        <div className="navbar__middle-container" >
            <input type="text" placeholder="Search for anything" />
            <button>
                <img src={searchIcon} alt="search-icon"/>
            </button>
        </div>
        <div className="navbar__right-container" >
            <div className='navbar__docs-link'>Docs</div>
            <div className="navbar__notification" >
                <img src={bellIcon} alt="notification-icon" />
            </div>
            <div className="navbar__profile" >
                <img className="navbar__profile-picture" src={profilePicture} alt="user-profile-pics" />
                <span>Adedeji</span>
                <img className="navbar__chevron" src={chevronDown} alt="chevron-down" />
            </div>
            
        </div>
        <div onClick={toggleSidebar} className="navbar__hamburger-small-screen-container">
                <img src={isOpen ?  closeIcon:hamBurgerIcon } className='navbar__hamburger-small-screen' alt="hamburger" />
        </div>
    </nav>
  )
}

export default Navbar