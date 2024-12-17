import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header/Header';
import { Home } from '../pages/Home/Home';
import { TaskList } from '../pages/TaskList/TaskList';
import { TaskDetails } from '../pages/TaskDetail/TaskDetail';
import { CreateTask } from '../pages/CreateTask/CreateTask';
import { TCCList } from '../pages/TCCList/TCCList';
import { TCCDetails } from '../pages/TCCDetails/TCCDetails';
import { EditProfile } from '../pages/EditProfile/EditProfile';
import { UsersList } from '../pages/UsersList/UsersList';
import { CreateTCC } from '../pages/CreateTCC/CreateTCC';
import { Chat } from '../pages/Chat/Chat';

export const PrivateRoutes: React.FC = () => {
    const { hasRole } = useAuth();

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/tasks/:id" element={<TaskDetails />} />
                {hasRole('coordenador') && (
                    <Route path="/tasks/create" element={<CreateTask />} />
                )}
                <Route path="/tcc" element={<TCCList />} />
                <Route path="/tcc/:id" element={<TCCDetails />} />
                <Route path="/tcc/create" element={<CreateTCC />} />

                <Route path="/edit-profile" element={<EditProfile />} />

                {hasRole('coordenador') && (
                    <Route path="/users" element={<UsersList />} />
                )}

                <Route path="/chat" element={<Chat />} />
            </Routes>
        </>
    );
};
