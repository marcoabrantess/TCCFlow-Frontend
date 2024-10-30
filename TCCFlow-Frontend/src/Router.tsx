// src/router.tsx
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { useAuth } from './contexts/AuthContext';

const AppRouter: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Routes>
                = <Route path="/login" element={<Login />} />
                {/* Rota Home (acessível somente se o usuário estiver autenticado) */}
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Home /> : <Navigate to="/login" />
                    }
                />
                {/* Redirecionar rotas não reconhecidas para Login */}
                <Route
                    path="*"
                    element={<Navigate to={isAuthenticated ? '/' : '/login'} />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
