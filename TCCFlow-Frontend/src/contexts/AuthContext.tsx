// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Mock data for login credentials
    const mockEmail = 'user@example.com';
    const mockPassword = '123456';

    const login = (email: string, password: string): boolean => {
        if (email === mockEmail && password === mockPassword) {
            setIsAuthenticated(true);
            return true; // Retorna verdadeiro se a autenticação for bem-sucedida
        } else {
            alert('Credenciais inválidas');
            return false; // Retorna falso se as credenciais estiverem erradas
        }
    };

    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
