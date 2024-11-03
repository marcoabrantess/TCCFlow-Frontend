// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'coordenador' | 'orientador' | 'aluno';

interface AuthContextType {
    isAuthenticated: boolean;
    userRoles: UserRole[];
    login: (email: string, password: string) => boolean;
    logout: () => void;
    hasRole: (role: UserRole) => boolean;
    hasAnyRole: (roles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);

    // Mock data for login credentials and roles
    const mockEmail = 'user@example.com';
    const mockPassword = '123456';
    const mockRoles: UserRole[] = ['aluno', 'coordenador']; // Mock roles, can include multiple roles

    const login = (email: string, password: string): boolean => {
        if (email === mockEmail && password === mockPassword) {
            setIsAuthenticated(true);
            setUserRoles(mockRoles); // Set mock roles on successful login
            return true;
        } else {
            alert('Credenciais inválidas');
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRoles([]); // Clear roles on logout
    };

    // Helper functions to check roles
    const hasRole = (role: UserRole) => userRoles.includes(role);
    const hasAnyRole = (roles: UserRole[]) =>
        roles.some((role) => userRoles.includes(role));

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userRoles,
                login,
                logout,
                hasRole,
                hasAnyRole,
            }}
        >
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
