// src/routes/PrivateRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header/Header';
import { Home } from '../pages/Home/Home';
import { TaskListPage } from '../pages/TaskList/TaskList';
import { TaskDetailsPage } from '../pages/TaskDetail/TaskDetail';
import { CreateTask } from '../pages/CreateTask/CreateTask';

export const PrivateRoutes: React.FC = () => {
    const { hasRole } = useAuth();

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<TaskListPage />} />
                <Route path="/tasks/:id" element={<TaskDetailsPage />} />
                {hasRole('coordenador') && (
                    <Route path="/tasks/create" element={<CreateTask />} />
                )}
            </Routes>
        </>
    );
};