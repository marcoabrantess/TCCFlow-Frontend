import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import {
    TaskContainer,
    TaskItemsContainer,
    TaskItem,
    AddTaskButton,
} from './styles';

export const TaskList: React.FC = () => {
    const { hasRole } = useAuth();
    const navigate = useNavigate();

    const tasks = [
        { id: 1, title: 'Tarefa 1', completed: true },
        { id: 2, title: 'Tarefa 2', completed: false },
        // Exemplo de tarefas
    ];

    const handleTaskClick = (id: number) => {
        navigate(`/tasks/${id}`);
    };

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
                        key={task.id}
                        $completed={task.completed}
                        onClick={() => handleTaskClick(task.id)}
                    >
                        {task.title}
                    </TaskItem>
                ))}
            </TaskItemsContainer>
        </TaskContainer>
    );
};
