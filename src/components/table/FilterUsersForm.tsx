import '../../styles/components/form/filter-form.scss'
import { useForm,SubmitHandler } from 'react-hook-form';


interface FiterUserFormData {
	organization: string;
	username: string;
	email: string;
	date: string;
	phone_number: string;
	status: boolean;
  }


const FilterUsersForm = () => {

	const { register,reset, handleSubmit } = useForm<FiterUserFormData>();

	const onSubmit: SubmitHandler<FiterUserFormData> = (_data) => {
		if (_data) {
			console.log(_data);
		}
	};
  



  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="filter-form__form-group">
				<label htmlFor="organization">Organization</label>
				<select
					{...register('organization', {
						required: false,
					})}
				>
					<option value="">Select</option>
				</select>
			</div>
			<div className="filter-form__form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
                    placeholder='User'
					{...register('username', {
						required: false,
					})}
				/>
			</div>
			<div className="filter-form__form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
                    placeholder='Email'
					{...register('email', {
						required: false,
					})}
				/>
			</div>
			<div className="filter-form__form-group">
				<label htmlFor="date">Date</label>
				<input
					type="date"
                    placeholder='Date'
					{...register('date', {
						required: false,
					})}
				/>
			</div>
			<div className="filter-form__form-group">
				<label htmlFor="phone">Phone Number</label>
				<input
					type="tel"
                    placeholder='Phone Number'
					{...register('phone_number', {
						required: false,
					})}
				/>
			</div>
			<div className="filter-form__form-group">
				<label htmlFor="status">Status</label>
				<select
					{...register('status', {
						required: false,
					})}
				>
					<option value="">Select</option>
				</select>
			</div>
			<div>
				<button onClick={()=>reset()} type="reset">Reset</button>
				<button type="submit">Filter</button>
			</div>
		</form>
  )
}

export default FilterUsersForm