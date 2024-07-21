import "../../styles/components/user/user-details-main.scss"
import { User } from "../../types/user";

interface UserDetailsMainProps{
    user:User;
}

const UserDetailsMain = ({user}:UserDetailsMainProps) => {
  return (
    <div data-testid="detail-page-main-card"className="user-details-main">
			<div className="user-details-main__card">
				<h2>Personal Information</h2>
				<div className="user-details-main__info">
					<div>
						<p>Full Name</p>
						<p>{`${user?.username}`}</p>
					</div>
					<div>
						<p>Phone Number</p>
						<p>{user?.phoneNumber}</p>
					</div>
					<div>
						<p>Email Address</p>
						<p>{user?.userEmail}</p>
					</div>
					<div>
						<p>Bvn</p>
						<p>{user?.bvn}</p>
					</div>
					<div>
						<p>Gender</p>
						<p>{user?.gender}</p>
					</div>
					<div>
						<p>Marital status</p>
						<p>{user?.maritalStatus}</p>
					</div>
					<div>
						<p>Children</p>
						<p>{user?.children}</p>
					</div>
					<div>
						<p>Type of residence</p>
						<p>{user?.residence}</p>
					</div>
				</div>
			</div>

			<div className="user-details-main__card">
				<h2>Education and Employment</h2>
				<div className="user-details-main__info">
					<div>
						<p>level of education</p>
						<p>{user?.levelOfEducation}</p>
					</div>
					<div>
						<p>employment status</p>
						<p>{user?.employmentStatus}</p>
					</div>
					<div>
						<p>sector of employment</p>
						<p>{user?.sectorOfEmployment}</p>
					</div>
					<div>
						<p>Duration of employment</p>
						<p>{user?.durationOfEmployment}</p>
					</div>
					<div>
						<p>office email</p>
						<p>{user?.officeEmail}</p>
					</div>
					<div>
						<p>Monthly income</p>
						<p>{`${user?.monthlyIncomeRange}`}</p>
					</div>
					<div>
						<p>loan repayment</p>
						<p>{user?.loanRepayment}</p>
					</div>
				</div>
			</div>

			<div className="user-details-main__card">
				<h2>Socials</h2>
				<div className="user-details-main__info">
					<div>
						<p>Twitter</p>
						<p>{user?.twitter}</p>
					</div>
					<div>
						<p>Facebook</p>
						<p>{user?.facebook}</p>
					</div>
					<div>
						<p>Instagram</p>
						<p>{user?.instagram}</p>
					</div>
				</div>
			</div>

			<div className="user-details-main__card">
				<h2>Guarantor</h2>
				<div className="user-details-main__info">
					<div>
						<p>Full Name</p>
						<p>{`${user?.guarantorFullName}`}</p>
					</div>
					<div>
						<p>Phone Number</p>
						<p>{user?.guarantorPhoneNumber}</p>
					</div>
					<div>
						<p>Email Address</p>
						<p>{user?.guarantorEmailAddress}</p>
					</div>
					<div>
						<p>Relationship</p>
						<p>{user?.guarantorRelationship}</p>
					</div>
				</div>
			</div>
			<div className="user-details-main__card">
				<h2>Guarantor</h2>
				<div className="user-details-main__info">
					<div>
						<p>Full Name</p>
						<p>{`${user?.guarantorFullName}`}</p>
					</div>
					<div>
						<p>Phone Number</p>
						<p>{user?.guarantorPhoneNumber}</p>
					</div>
					<div>
						<p>Email Address</p>
						<p>{user?.guarantorEmailAddress}</p>
					</div>
					<div>
						<p>Relationship</p>
						<p>{user?.guarantorRelationship}</p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default UserDetailsMain