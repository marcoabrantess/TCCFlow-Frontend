import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { HeaderContainer, NavLink, LogoutButton } from './styles';

export const Header: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <HeaderContainer>
            <h1>TCCFlow</h1>
            <nav>
                {isAuthenticated && (
                    <NavLink as={Link} to="/">
                        Home
                    </NavLink>
                )}
                {isAuthenticated ? (
                    <LogoutButton onClick={logout}>Logout</LogoutButton>
                ) : (
                    <NavLink as={Link} to="/login">
                        Login
                    </NavLink>
                )}
            </nav>
        </HeaderContainer>
    );
};
