/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen,waitFor } from '@testing-library/react';
import { describe, it, beforeAll, afterEach, afterAll,expect } from 'vitest';
import UsersPage from '../pages/user/UsersPage';
import { BrowserRouter } from 'react-router-dom';
import { http,HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
// import { rest } from 'msw';

const server = setupServer(
	// eslint-disable-next-line no-empty-pattern
	http.get(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}/users`, ({ }) => {
		return HttpResponse.json({ data: 'test' });
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UsersPage', () => {
   
    it('renders without errors', async () => {
        render(<BrowserRouter><UsersPage /> </BrowserRouter>); 
        expect(await screen.findByTestId('users-page-title')).toBeInTheDocument();
    });
    it('should display users stats ard and users table after fetching users data from api end point', async () => {
      render(<BrowserRouter><UsersPage /> </BrowserRouter>);
  
      
      const usersStats = screen.getByTestId('user-info-stat');
      expect(usersStats).toBeInTheDocument();

      waitFor(() => {
        // const table = screen.getByTestId('user-table');
        // expect(table).toBeInTheDocument();
      });
    });

});
