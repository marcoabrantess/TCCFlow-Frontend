// src/routes/PrivateRoutes.tsx
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
                <Route path="/tccs" element={<TCCList />} />
                <Route path="/tccs/:id" element={<TCCDetails />} />
                <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
        </>
    );
};
