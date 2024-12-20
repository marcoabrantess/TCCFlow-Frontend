import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/Login/Login';
import { PrivateRoutes } from './PrivateRoutes';

export const Router: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/*"
                element={
                    isAuthenticated ? (
                        <PrivateRoutes />
                    ) : (
                        <Navigate to="/login" replace />
                    )
                }
            />
        </Routes>
    );
};
