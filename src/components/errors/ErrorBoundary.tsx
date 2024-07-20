import React, { useState, ReactNode } from 'react';
import ErrorPage from '../../pages/error/ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <div onError={handleOnError}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
