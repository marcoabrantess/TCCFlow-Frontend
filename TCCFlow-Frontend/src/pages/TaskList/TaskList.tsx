import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

import {
    TaskContainer,
    TaskItemsContainer,
    TaskItem,
    AddTaskButton,
} from './styles';

interface Task {
    _id: number;
    title: string;
}

export const TaskList: React.FC = () => {
    const { hasRole } = useAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTCCs = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response?.data);
        } catch (err) {
            console.error('Failed to fetch Tasks:', err);
            setError('Erro ao carregar as tarefas. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTCCs();
    }, []);

    const handleTaskClick = (id: number) => {
        navigate(`/tasks/${id}`);
    };

    if (loading) {
        return <p>Carregando Tarefas...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <TaskContainer>
            <h1>Tarefas</h1>
            {hasRole('coordenador') && (
                <AddTaskButton onClick={() => navigate('/tasks/create')}>
                    Criar Tarefa
                </AddTaskButton>
            )}
            <TaskItemsContainer>
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        onClick={() => handleTaskClick(task._id)}
                    >
                        {task.title}
                    </TaskItem>
                ))}
            </TaskItemsContainer>
        </TaskContainer>
    );
};
