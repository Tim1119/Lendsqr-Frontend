import { Link } from 'react-router-dom';
import filterIcon from '../../assets/icons/pages/filter-icon.svg'
import { useState } from 'react';
import { User } from '../../types/user';
import moreIcon from '../../assets/icons/pages/more-icon.svg'
import FilterUsersTableForm from './FilterUsersForm';
import '../../styles/components/table/users-table.scss'
import OptionsDropDown from './OptionsDropdown';

interface UserTableProps{
	users:User[]
}
const UsersTable = ({users}:UserTableProps) => {

    const [isFilterOpen, setIsFilterOpen] = useState<null | number>(null);
	const [isOptionsOpen, setIsOptionsOpen] = useState<null | number>(null);

    const userTableColumnNames = ['ORGANIZATION', 'USERNAME', 'EMAILS', 'PHONE NUMBER', 'DATE JOINED', 'STATUS', ''];

  return (
    <div data-testid="user-table" className="users-table">
			<table>
				<thead>
					<tr>
						{userTableColumnNames.map((columnHeader, index) => {
							return (
								<th key={index}>
									<div>
										<span>{columnHeader}</span>
										{columnHeader && (
											<img
												src={filterIcon}
												alt="filter-icon"
												onClick={() => (isFilterOpen === index ? setIsFilterOpen(null) : setIsFilterOpen(index))}
											/>
										)}
									</div>
									{isFilterOpen === index ? <FilterUsersTableForm /> : ''}
								</th>
							);
						})}
					</tr>
				</thead>

				<tbody>
					{users?.map((user: User, index: number) => {
						return (
							<tr key={index}>
								<td>
									<Link to={`/dashboard/users/${user?.id}`}>{user?.organisation}</Link>
								</td>
								<td>
								<Link to={`/dashboard/users/${user?.id}`}>{user?.username}</Link>
								</td>
								<td>{user?.userEmail}</td>
								<td>0{user?.phoneNumber}</td>
								<td>{user?.dateJoined}</td>
								<td>
									<span className={`user-table__status ${user?.status == 'Active' && "status--active"} ${user?.status == 'Blacklisted' && "status--blacklisted"}  ${user?.status == 'Pending' && "status--pending"} ${user?.status == 'Inactive' && "status--inactive"}`}> {user?.status}</span>
								</td>
								<td>
									<img
										src={moreIcon}
										alt="more-toggle-icon"
										onClick={() => (isOptionsOpen === index ? setIsOptionsOpen(null) : setIsOptionsOpen(index))}
									/>

									{isOptionsOpen === index ? <OptionsDropDown /> : ''}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
  )
}

export default UsersTable