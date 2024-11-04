import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'coordenador' | 'orientador' | 'aluno';

interface User {
    fullName: string;
    photoUrl?: string;
    email: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    userRoles: UserRole[];
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    hasRole: (role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const [user, setUser] = useState<User | null>(null);

    const mockEmail = 'user@example.com';
    const mockPassword = '123456';
    const mockRoles: UserRole[] = ['aluno', 'coordenador'];
    const mockUser: User = {
        fullName: 'Marco Aurélio',
        photoUrl: '',
        email: mockEmail,
    };

    const login = (email: string, password: string): boolean => {
        if (email === mockEmail && password === mockPassword) {
            setIsAuthenticated(true);
            setUserRoles(mockRoles);
            setUser(mockUser);
            return true;
        } else {
            alert('Credenciais inválidas');
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRoles([]);
        setUser(null);
    };

    const hasRole = (role: UserRole) => userRoles.includes(role);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userRoles,
                user,
                login,
                logout,
                hasRole,
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
