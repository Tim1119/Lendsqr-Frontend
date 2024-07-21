import '../../styles/components/user/user-details-header.scss'
import positiveRatingIcon from '../../assets/icons/pages/positive-rating.svg'
import emptyRatingIcon from '../../assets/icons/pages/empty-rating.svg'
import { User } from '../../types/user'

interface UserDetailsHeaderProps{
    user:User;
}


const UserDetailsHeader = ({user}:UserDetailsHeaderProps) => {
   
  return (
    <div data-testid="detail-page-top-card" className='user-details-header' >
        <div className="user-details-header__top-info">
            <div className='user-details-header__profile-and-name-container'>
                 
                <div className="user-details-header__profile-container" >
                    <img src={user?.image} alt="user-icon" />
                </div>
                <div className="user-details-header__name-and-id" >
                    <h3>{user?.username}</h3>
                    <p>{user?.id}</p>
                </div>
            </div>
            <div className='user-details-header__top-info-user-tier' >
                <h4>User's Tier</h4>

                <div className="user-details-header__rating">
                    {[...Array(user?.userTier)].map((_, index) => (
                      <span key={index}><img  src={positiveRatingIcon} alt="rating" /></span>  
                    ))}
                    <span   ><img src={emptyRatingIcon} alt="empty-rating" /></span>
                    
                </div>
                <p></p>
            </div>
            <div className="user-details-header__top-info-bank-and-amount" >
                <div>
                <h3>{user?.monthlyIncome}</h3>
                {/* <h3>₦{user?.monthlyIncome}</h3> */}
                <p>{user?.bankAccount}/{user?.bank}</p>
                </div>
            </div>
        </div>
        <div className="user-details-header__Bottom-Info" >
            <div >
                <li>General Details</li>
            </div>
            <div>
                <li>Documents</li>
            </div>
            <div>
                <li>Bank Details</li>
            </div>
            <div>
                <li>Loans</li>
            </div>
            <div>
                <li>Savings</li>
            </div>
            <div>
                <li>App and System</li>
            </div>
        </div>
    </div>
  )
}

export default UserDetailsHeader