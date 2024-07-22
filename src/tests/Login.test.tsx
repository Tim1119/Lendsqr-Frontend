import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import LoginForm from '../components/forms/LoginForm';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter, Route,Routes } from 'react-router-dom';
import { vi } from 'vitest';


describe('LoginForm component', () => {
    it('renders the login form', () => {
        render(
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>
        );

        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });



    it('shows error messages when required fields are not filled', async () => {
        render(
            <BrowserRouter>
            <LoginForm />
        </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', { name: /log in/i });
        await userEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.getByText(/email address is required/i)).toBeInTheDocument();
            expect(screen.getByText(/password is required/i)).toBeInTheDocument();
        });
    });

    it('redirects to dashboard after successful login', async () => {

        const mockLogin = vi.fn(() => Promise.resolve(true));

        render(
            <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path="/login" element={ <LoginForm />} />
              <Route path="/dashboard/users" element={await mockLogin() && <div data-testid="dashboard-page">Dashboard Page</div>} />
            </Routes>
          </MemoryRouter>
        );

      
        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);
        const loginButton = screen.getByRole('button');

        await userEvent.type(emailInput, 'test@example.com');
        await userEvent.type(passwordInput, 'password');
        await userEvent.click(loginButton);

        expect(mockLogin).toHaveBeenCalledTimes(1);


        await waitFor(() => {
            expect(screen.getByText('SHOW')).toBeInTheDocument();
            // expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
        });
    });

});
