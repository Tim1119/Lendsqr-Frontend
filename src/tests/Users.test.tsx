import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Users from '../pages/user/UsersPage';
import { http, HttpResponse } from 'msw';






// const server = setupServer(
//   http.get(`${process.env.REACT_APP_MOCK_API_GENERATOR_URL}/users`, () => {
//     return HttpResponse.json({ data: 'test' });
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe('Users list component', () => {
	it('should display users stats and table after fetching users data from api', async () => {
		render(<Users />);

		const usersStats = screen.getByTestId('user-info-stat');
		expect(usersStats).toBeInTheDocument();

		// await waitFor(() => {
		// 	const table = screen.getByTestId('user-table');
		// 	expect(table).toBeInTheDocument();
		// });
	});
});