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
                <NavButton to="/tcc">Repositório de TCCs</NavButton>
            </NavContainer>
            <UserContainer>
                {user ? (
                    <UserProfile name={user.name} photoUrl={user.photoUrl} />
                ) : (
                    <p>Carregando...</p>
                )}
            </UserContainer>
        </HeaderContainer>
    );
};
