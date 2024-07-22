import { render, screen} from '@testing-library/react';
import { describe, it, beforeAll, afterEach, afterAll,expect } from 'vitest';
import UserDetailPage from '../pages/user/UserDetailPage';
import { BrowserRouter } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';



const server = setupServer(
	// eslint-disable-next-line no-empty-pattern
	http.get(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}/users/${`SQFf8197g95`}`, ({ }) => {
		return HttpResponse.json({ user: 'test-single-user-detail' });
	})
);



beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users Detail Page', () => {
   
    it('renders without errors', async () => {
        render(<BrowserRouter><UserDetailPage /> </BrowserRouter>); 
        expect(await screen.findByTestId('user-detail-page')).toBeInTheDocument();
    });
  

});
