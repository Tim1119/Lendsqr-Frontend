import { Link } from 'react-router-dom';
import '../../styles/components/dashboard/sidebar-link.scss'

interface SidebarLinkProps{
  title:string;
  icon?:string;
  link:string;
  toggleIcon?:string;
  id:number;
  header?:boolean;
  isActive:boolean;
}

const SidebarLink = ({title,icon,link,toggleIcon,id,header,isActive}:SidebarLinkProps) => {
  return (
    <> 
    
    {!header ? (

    <Link to={link} className={`sidebarlink ${isActive && "sidebarlink--active"} ${(id === 1 || id === 2) && '--topmost-links'} ${id === 26 && 'sidebarlink__logout'} ${!isActive && "sidebarlink--hover"} ${id < 3 || id > 25 && "sidebarlink--bigger"} ${id===26 && 'border--top'}`}>
      {icon &&
        <span className="sidebarlink__icon-container" >
         <img className="sidebarlink__icon" src={icon} alt={`${title}-icon`} />
         </span>
         }
        <span className="sidebarlink__title" >{title}</span>
      {toggleIcon && <span className="sidebarlink__toggle" ><img src={toggleIcon} alt="toggle-icon" /></span>}
    </Link>
    ):(
    <li className={`sidebarlink ${header && 'sidebar--header-small'} `}>
        <span className={ "sidebarlink__title-header" }>{title}</span>
    </li>

    )}
    {id === 26 && <small className="sidebarlink__version" >v1.2.0 </small> }
   
    </>
  )
}

export default SidebarLink