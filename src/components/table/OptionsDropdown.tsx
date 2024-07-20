import eyeIcon from '../../assets/icons/pages/eye-icon.svg'
import blackListIcon from '../../assets/icons/pages/blacklist.svg'
import activateUserIcon from '../../assets/icons/pages/activate.svg'
import '../../styles/components/table/option-dropdown.scss'

const OptionsDropDown = () => {
	return (
		<div className="options-dropdown">
			<ul>
				<li>
					<img src={eyeIcon} alt="view-detail-icon" /> <span>View Details</span>
				</li>
				<li>
					<img src={blackListIcon} alt="blaclist-user-icon" /> <span>Blacklist User</span>
				</li>
				<li>
					<img src={activateUserIcon} alt="activate-user-icon" /> <span>Activate User</span>
				</li>
			</ul>
		</div>
	);
};

export default OptionsDropDown;
