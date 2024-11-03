// src/pages/TaskDetailsPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { TaskDetailsContainer, TaskActionButton } from './styles';

export const TaskDetailsPage: React.FC = () => {
    const { id } = useParams();
    const { hasRole } = useAuth();

    const handleResponse = () => {
        // Lógica para responder à tarefa
    };

    return (
        <TaskDetailsContainer>
            <h1>Detalhes da Tarefa {id}</h1>
            <p>Informações sobre a tarefa...</p>
            {hasRole('aluno') && (
                <TaskActionButton onClick={handleResponse}>
                    Responder Tarefa
                </TaskActionButton>
            )}
            {hasRole('orientador') && <p>Visualizando tarefas dos alunos.</p>}
        </TaskDetailsContainer>
    );
};
