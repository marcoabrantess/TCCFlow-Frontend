import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import { UserProfile } from '../UserProfile/UserProfile';

import {
    HeaderContainer,
    LogoLink,
    NavButton,
    NavContainer,
    UserContainer,
} from './styles';

export const Header: React.FC = () => {
    const { user } = useAuth();

    return (
        <HeaderContainer>
            <LogoLink to="/">TCCFlow</LogoLink>
            <NavContainer>
                <NavButton to="/tasks">Tarefas</NavButton>
                <NavButton to="/tccs">Repositório de TCCs</NavButton>
            </NavContainer>
            <UserContainer>
                {user ? (
                    <UserProfile
                        fullName={user.fullName}
                        photoUrl={user.photoUrl}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </UserContainer>
        </HeaderContainer>
    );
};
