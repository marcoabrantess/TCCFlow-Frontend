import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { UsersContainer, UserItem, SearchInput } from './styles';

interface User {
    _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

export const UsersList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response?.data);
                setFilteredUsers(response?.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const results = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredUsers(results);
    }, [searchTerm, users]);

    return (
        <UsersContainer>
            <h1>Lista de Usuários</h1>
            <SearchInput
                type="text"
                placeholder="Pesquisar por nome ou email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <UserItem key={user._id}>
                        <p>
                            {user.name} - {user.email} -{' '}
                            {user.isActive ? 'Ativo' : 'Inativo'}
                        </p>
                    </UserItem>
                ))}
            </ul>
        </UsersContainer>
    );
};
