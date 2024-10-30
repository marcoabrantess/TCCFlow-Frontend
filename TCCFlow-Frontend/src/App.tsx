import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import AppRouter from './Router';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <GlobalStyles />
            <AppRouter />
        </AuthProvider>
    );
};

export default App;
