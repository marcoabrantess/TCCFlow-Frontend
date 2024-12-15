import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { api } from '../services/api';

type UserRole = 'coordenador' | 'orientador' | 'aluno' | 'admin';

interface User {
    fullName: string;
    id: string;
    name: string;
    photoUrl?: string;
    email: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    userRoles: UserRole[];
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    hasRole: (role: UserRole) => boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('authUser');
        const storedRoles = localStorage.getItem('authRoles');

        if (storedToken && storedUser && storedRoles) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
            setUserRoles(JSON.parse(storedRoles));
        }

        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const { token, user, roles } = await api.request('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            localStorage.setItem('authToken', token);
            localStorage.setItem('authUser', JSON.stringify(user));
            localStorage.setItem('authRoles', JSON.stringify(roles));

            setIsAuthenticated(true);
            setUser(user);
            setUserRoles(roles as UserRole[]);

            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        localStorage.removeItem('authRoles');
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
                isLoading,
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
