// src/pages/CreateTask/CreateTask.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
        .max(500, 'A descrição não pode ter mais que 500 caracteres')
        .optional(),
    file: z.any().optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

export const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormData>({
        resolver: zodResolver(taskSchema),
    });

    const onSubmit = (data: TaskFormData) => {
        console.log('Dados da nova tarefa:', data);
        setSubmitSuccess(true);
        setTimeout(() => {
            navigate('/tasks');
        }, 2000);
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
                    <label htmlFor="file">Anexo</label>
                    <input type="file" id="file" {...register('file')} />
                </FormGroup>

                <SubmitButton type="submit">Criar Tarefa</SubmitButton>
                {submitSuccess && (
                    <SuccessMessage>Tarefa criada com sucesso!</SuccessMessage>
                )}
            </form>
        </CreateTaskContainer>
    );
};
