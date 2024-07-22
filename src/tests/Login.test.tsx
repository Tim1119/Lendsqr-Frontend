import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, jest } from '@jest/globals';
import LoginForm from '../components/forms/LoginForm';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

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
           
        });
        await waitFor(() => {
          
            expect(screen.getByText(/password is required/i)).toBeInTheDocument();
        });
    });

   
});
