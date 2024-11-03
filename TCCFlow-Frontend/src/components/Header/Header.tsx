// src/components/Header/Header.tsx
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { HeaderContainer, LogoLink, NavButton, LogoutButton } from './styles';

export const Header: React.FC = () => {
    const { logout } = useAuth();

    return (
        <HeaderContainer>
            <LogoLink to="/">TCCFlow</LogoLink>
            <nav>
                <NavButton to="/tasks">Atividades</NavButton>{' '}
                <LogoutButton onClick={logout}>Logout</LogoutButton>
            </nav>
        </HeaderContainer>
    );
};
