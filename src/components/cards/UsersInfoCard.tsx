import '../../styles/components/cards/users-info-card.scss'
interface UsersInfoCardProps{
    icon:string;
    title:string;
    stat:string;
}

const UsersInfoCard = ({icon,title,stat}:UsersInfoCardProps) => {
  return (
    <div className='usersInfoCard' >
        <img  className='usersInfoCard__icon' src={icon} alt="" />
        <h4 className='usersInfoCard__title' >{title}</h4>
        <span className="usersInfoCard__stat" >{stat}</span>
    </div>
  )
}

export default UsersInfoCard