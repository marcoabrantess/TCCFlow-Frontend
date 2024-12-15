import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import {
    TaskDetailsContainer,
    TaskTitle,
    TaskInfo,
    QuestionsContainer,
    QuestionCard,
    QuestionText,
    TextArea,
    TaskActionButton,
    RoleInfo,
} from './styles';

interface Question {
    _id: string;
    text: string;
    answer: string;
}

interface Task {
    id: number;
    title: string;
    questions: Question[];
    isCompleted: boolean;
}

export const TaskDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { hasRole } = useAuth();
    const [task, setTask] = useState<Task | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [responses, setResponses] = useState<Record<string, string>>({});
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const fetchTaskDetails = async () => {
        try {
            const response = await api.get(`/tasks/${id}`);
            setTask(response.data);
            const initialResponses = response.data.questions.reduce(
                (acc, question) => ({
                    ...acc,
                    [question._id]: question.answer,
                }),
                {},
            );
            setResponses(initialResponses);
        } catch (err) {
            console.error('Failed to fetch Task details:', err);
            setError(
                'Erro ao carregar os detalhes da tarefa. Tente novamente.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (questionId: string, value: string) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    useEffect(() => {
        if (id) {
            fetchTaskDetails();
        }
    }, [id]);

    const handleResponse = async () => {
        try {
            const questions = task?.questions.map((q) => ({
                text: q.text,
                answer: responses[q._id] || '',
            }));
            const payload = {
                questions: questions,
                isCompleted: true,
            };

            await api.post(`/tasks/${id}`, payload, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Respostas enviadas com sucesso!');
            setIsEditing(false);
        } catch (err) {
            console.error('Erro ao enviar respostas:', err);
            alert('Erro ao enviar respostas. Tente novamente.');
        }
    };

    if (loading) return <p>Carregando detalhes da tarefa...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!task) return <p>Nenhuma tarefa encontrada.</p>;

    return (
        <TaskDetailsContainer>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskInfo>Informações sobre a tarefa</TaskInfo>
            <QuestionsContainer>
                {task.questions.map((question) => (
                    <QuestionCard key={question._id}>
                        <QuestionText>{question.text}</QuestionText>
                        {task.isCompleted && !isEditing ? (
                            <p>{responses[question._id]}</p>
                        ) : (
                            <TextArea
                                placeholder="Digite sua resposta aqui"
                                value={responses[question._id]}
                                onChange={(e) =>
                                    handleInputChange(
                                        question._id,
                                        e.target.value,
                                    )
                                }
                            />
                        )}
                    </QuestionCard>
                ))}
            </QuestionsContainer>
            {task.isCompleted && (
                <TaskActionButton onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Salvar Alterações' : 'Editar Respostas'}
                </TaskActionButton>
            )}
            {hasRole('aluno') && !task.isCompleted && (
                <TaskActionButton onClick={handleResponse}>
                    Responder Tarefa
                </TaskActionButton>
            )}
            {hasRole('orientador') && (
                <RoleInfo>Visualizando tarefas dos alunos.</RoleInfo>
            )}
        </TaskDetailsContainer>
    );
};
