import '../../styles/components/cards/users-info-card-row.scss'
import UsersInfoCard from "./UsersInfoCard"
import { usersInformationCardData } from "../../utils/UsersInformationCardData"

const UsersInfoCardRow = () => {
  return (
    <div data-testid="user-info-stat" className="usersInfoCardRow" >
        {usersInformationCardData.map((usersInformation,index)=>(
            <UsersInfoCard key={index} icon={usersInformation.icon} title={usersInformation.title} stat={usersInformation.stat} />
        ))}
    </div>
  )
}

export default UsersInfoCardRow