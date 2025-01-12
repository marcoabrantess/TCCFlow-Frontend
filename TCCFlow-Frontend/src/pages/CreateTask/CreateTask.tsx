import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import {
    CreateTaskContainer,
    FormGroup,
    ErrorText,
    SubmitButton,
    SuccessMessage,
} from './styles';

const taskSchema = z.object({
    title: z
        .string()
        .min(3, 'O título deve ter pelo menos 3 caracteres')
        .nonempty('O título é obrigatório'),
    description: z
        .string()
        .min(10, 'A descrição deve ter pelo menos 10 caracteres')
        .nonempty('A descrição é obrigatória'),
    totalGrade: z
        .number()
        .min(0, 'A nota deve ser maior que 0')
        .max(100, 'A nota máxima é 100'),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data: TaskFormValues) => {
        try {
            await api.post('/tasks', {
                ...data,
                studentGrades: [],
            });
            setSubmitSuccess(true);
            navigate('/');
        } catch (error) {
            console.error('Erro ao criar task:', error);
        }
    };

    return (
        <CreateTaskContainer>
            <h1>Criar Nova Tarefa</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" {...register('title')} />
                    {errors.title && (
                        <ErrorText>{errors.title.message}</ErrorText>
                    )}
                </FormGroup>

                <FormGroup>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" {...register('description')} />
                    {errors.description && (
                        <ErrorText>{errors.description.message}</ErrorText>
                    )}
                </FormGroup>

                <FormGroup>
                    <label htmlFor="totalGrade">Nota Total</label>
                    <input
                        type="number"
                        id="totalGrade"
                        {...register('totalGrade', { valueAsNumber: true })}
                    />
                    {errors.totalGrade && (
                        <ErrorText>{errors.totalGrade.message}</ErrorText>
                    )}
                </FormGroup>

                <SubmitButton type="submit">Criar Tarefa</SubmitButton>
                {submitSuccess && (
                    <SuccessMessage>Tarefa criada com sucesso!</SuccessMessage>
                )}
            </form>
        </CreateTaskContainer>
    );
};
