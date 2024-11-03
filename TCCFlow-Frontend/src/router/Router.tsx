// src/routes/Router.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/Login/Login';
import { PrivateRoutes } from './PrivateRoutes';

export const Router: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            {isAuthenticated ? (
                <Route path="/*" element={<PrivateRoutes />} />
            ) : (
                <Route path="/*" element={<Navigate to="/login" replace />} />
            )}
        </Routes>
    );
};
