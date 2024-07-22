import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/icons/pages/arrow-left.svg'
import '../../styles/pages/user-detail.scss'
import UserDetailsHeader from '../../components/user/UserDetailsHeader'
import UserDetailsMain from '../../components/user/UserDetailsMain'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'
import { User } from '../../types/user'
import PageLoader from '../../components/loaders/PageLoader'



const UserDetailPage = () => {

  const { userId } = useParams(); // Get userId from route param
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState<string | null>(null);

  console.log('userId',userId)

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Check if user data is already in localStorage
        const cachedUser = localStorage.getItem(`user-${userId}`);
        if (cachedUser) {
          // Use cached user data if available
          setUser(JSON.parse(cachedUser));
        } else {  
          // Fetch user details from API if not stored in local Storage 
          const response = await axios.get<User>(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}/users/${userId}`);
          setUser(response.data);
          localStorage.setItem(`user-${userId}`, JSON.stringify(response.data));
          
        }
      } catch (error) {
        console.log('error',error)
        setError('Failed to fetch user details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); 

  return (
    <div data-testid="user-detail-page" className='users-detail-page' >
      <Link className='users-detail-page__back-page-icon' to="/dashboard/users" ><img src={arrowLeft} alt="arrow-left" /><span  >Back to Users</span></Link>
      <div className='users-detail-page__header-container' >
        <h3 className='users-detail-page__page-title'> User Details</h3>
        <div>
          <button className='users-detail-page__blacklist-button' >Blacklist User</button>
          <button className='users-detail-page__activate-button'>Activate User</button>
        </div>
      </div>
      {isLoading ? <PageLoader /> : (
        
        
      <div> 
        {user && (
          <> 
          <UserDetailsHeader user={user} />
          <UserDetailsMain user={user} />
          </>
        )}
        {isError && <h3 className='user-detail-page__error' >Error Fetching User Details</h3> }
      </div>
       
      )}
    </div>
  )
}

export default UserDetailPage