import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { UserMenuContainer, UserMenuItem, IconContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';

interface UserMenuProps {
    onClose: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
    const { logout } = useAuth();
    return (
        <UserMenuContainer>
            <UserMenuItem as={Link} to={`/edit-profile`} onClick={onClose}>
                <IconContainer>
                    <FaUserEdit />
                </IconContainer>
                Alterar Informações
            </UserMenuItem>
            <UserMenuItem as={Link} to="/users" onClick={onClose}>
                <IconContainer>
                    <FaUsers />
                </IconContainer>
                Listar Usuários
            </UserMenuItem>

            <UserMenuItem
                as="button"
                onClick={() => {
                    logout();
                    onClose();
                }}
            >
                <IconContainer>
                    <FaSignOutAlt />
                </IconContainer>
                Logout
            </UserMenuItem>
        </UserMenuContainer>
    );
};
