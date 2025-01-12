import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import {
    TaskDetailsContainer,
    TaskTitle,
    TaskInfo,
    GradesContainer,
    StudentGradeCard,
    GradeInput,
    TaskActionButton,
    //RoleInfo,
    Description,
} from './styles';

interface StudentGrade {
    studentId: string;
    percentageGrade: number;
}

interface Student {
    _id: string;
    name: string;
}

interface Task {
    _id: string;
    title: string;
    description: string;
    totalGrade: number;
    studentGrades: StudentGrade[];
}

export const TaskDetails: React.FC = () => {
    const { id: taskId } = useParams<{ id: string }>();
    const { hasRole, user } = useAuth();
    const [task, setTask] = useState<Task | null>(null);
    const [students, setStudents] = useState<Student[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [grades, setGrades] = useState<Record<string, number>>({});

    const fetchTaskDetails = async () => {
        try {
            const [taskResponse, studentsResponse] = await Promise.all([
                api.get(`/tasks/${taskId}`),
                api.get('/users'),
            ]);

            const loadedTask: Task = taskResponse.data;
            const loadedStudents: Student[] = studentsResponse.data;

            setTask(loadedTask);
            setStudents(loadedStudents);

            const initialGrades: Record<string, number> = {};
            loadedTask.studentGrades.forEach((grade) => {
                initialGrades[grade.studentId] = grade.percentageGrade;
            });
            setGrades(initialGrades);
        } catch (err) {
            console.error('Failed to fetch Task details:', err);
            setError(
                'Erro ao carregar os detalhes da tarefa. Tente novamente.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleGradeChange = (studentId: string, value: string) => {
        const numValue = Math.min(100, Math.max(0, Number(value) || 0));
        setGrades((prev) => ({
            ...prev,
            [studentId]: numValue,
        }));
    };

    const handleSaveGrades = async () => {
        if (!task) return;

        try {
            const studentGrades = Object.entries(grades).map(
                ([studentId, percentageGrade]) => ({
                    studentId,
                    percentageGrade,
                }),
            );

            await api.post(`/tasks/${taskId}`, {
                studentGrades,
            });

            alert('Notas salvas com sucesso!');
        } catch (err) {
            console.error('Erro ao salvar notas:', err);
            alert('Erro ao salvar notas. Tente novamente.');
        }
    };

    useEffect(() => {
        if (taskId) {
            fetchTaskDetails();
        }
    }, [taskId]);

    if (loading) return <p>Carregando detalhes da tarefa...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!task) return <p>Nenhuma tarefa encontrada.</p>;

    const calculateFinalGrade = (percentageGrade: number) => {
        return (percentageGrade / 100) * task.totalGrade;
    };

    return (
        <TaskDetailsContainer>
            <TaskTitle>{task.title}</TaskTitle>
            <Description>{task.description}</Description>
            <TaskInfo>Nota Total da Tarefa: {task.totalGrade} pontos</TaskInfo>

            {hasRole('coordenador') && (
                <GradesContainer>
                    {students.map((student) => (
                        <StudentGradeCard key={student._id}>
                            <h3>{student.name}</h3>
                            <div>
                                <GradeInput
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={grades[student._id] || ''}
                                    onChange={(e) =>
                                        handleGradeChange(
                                            student._id,
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Porcentagem da nota"
                                />
                                <span>
                                    Nota Final:{' '}
                                    {calculateFinalGrade(
                                        grades[student._id] || 0,
                                    ).toFixed(1)}
                                </span>
                            </div>
                        </StudentGradeCard>
                    ))}
                    <TaskActionButton onClick={handleSaveGrades}>
                        Salvar Notas
                    </TaskActionButton>
                </GradesContainer>
            )}

            {!hasRole('coordenador') && (
                <StudentGradeCard>
                    <h3>Sua Nota</h3>
                    <div>
                        <span>
                            Porcentagem: {grades[user?._id || ''] || 0}%
                        </span>
                        <span>
                            Nota Final:{' '}
                            {calculateFinalGrade(
                                grades[user?._id || ''] || 0,
                            ).toFixed(1)}
                        </span>
                    </div>
                </StudentGradeCard>
            )}
        </TaskDetailsContainer>
    );
};
