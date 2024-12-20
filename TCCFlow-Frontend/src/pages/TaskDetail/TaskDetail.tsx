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
    const { id: taskId } = useParams<{ id: string }>();
    const { hasRole, user } = useAuth();
    const userId = user?._id;

    const [task, setTask] = useState<Task | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [responses, setResponses] = useState<Record<string, string>>({});
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const storageKey = `respostas_${userId}_${taskId}`;

    const fetchTaskDetails = async () => {
        try {
            const response = await api.get(`/tasks/${taskId}`);
            const loadedTask: Task = response.data;
            setTask(loadedTask);

            const storedData = JSON.parse(
                localStorage.getItem(storageKey) || '{}',
            );
            const savedResponses = storedData.responses || {};

            const initialResponses: Record<string, string> = {};
            for (const question of loadedTask.questions) {
                initialResponses[question._id] =
                    savedResponses[question._id] || '';
            }

            setResponses(initialResponses);
            setIsCompleted(storedData.isCompleted || false);
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
        setResponses((prev) => {
            const updated = { ...prev, [questionId]: value };
            localStorage.setItem(
                storageKey,
                JSON.stringify({ responses: updated, isCompleted }),
            );
            return updated;
        });
    };

    const handleResponse = async () => {
        if (!task) return;

        const allAnswered = task.questions.every(
            (q) => responses[q._id]?.trim() !== '',
        );
        if (!allAnswered) {
            alert('Por favor, responda todas as questões antes de enviar.');
            return;
        }

        try {
            const questions = task.questions.map((q) => ({
                text: q.text,
                answer: responses[q._id] || '',
            }));

            const payload = {
                questions: questions,
                isCompleted: true,
            };

            await api.post(`/tasks/${taskId}`, payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            setIsCompleted(true);
            localStorage.setItem(
                storageKey,
                JSON.stringify({ responses, isCompleted: true }),
            );

            alert('Respostas enviadas com sucesso!');
            window.location.reload();
        } catch (err) {
            console.error('Erro ao enviar respostas:', err);
            alert('Erro ao enviar respostas. Tente novamente.');
        }
    };

    useEffect(() => {
        if (taskId && userId) {
            fetchTaskDetails();
        }
    }, [taskId, userId]);

    if (loading) return <p>Carregando detalhes da tarefa...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!task) return <p>Nenhuma tarefa encontrada.</p>;

    return (
        <TaskDetailsContainer>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskInfo>
                Informações sobre a tarefa -{' '}
                {isCompleted ? 'Concluída' : 'Pendente'}
            </TaskInfo>
            <QuestionsContainer>
                {task.questions.map((question) => (
                    <QuestionCard key={question._id}>
                        <QuestionText>{question.text}</QuestionText>
                        {isCompleted ? (
                            <p>{responses[question._id]}</p>
                        ) : (
                            <TextArea
                                placeholder="Digite sua resposta aqui"
                                value={responses[question._id] || ''}
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
            {!isCompleted && (
                <TaskActionButton onClick={handleResponse}>
                    Enviar resposta da tarefa
                </TaskActionButton>
            )}
            {hasRole('orientador') && (
                <RoleInfo>Visualizando tarefas dos alunos.</RoleInfo>
            )}
        </TaskDetailsContainer>
    );
};
