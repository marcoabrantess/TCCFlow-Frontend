import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
    QuestionContainer,
    AddQuestionButton,
    RemoveButton,
} from './styles';

const taskSchema = z.object({
    title: z
        .string()
        .min(3, 'O título deve ter pelo menos 3 caracteres')
        .nonempty('O título é obrigatório'),
    questions: z.array(
        z.object({
            text: z.string().min(1, 'A questão não pode estar vazia'),
        }),
    ),
});

type TaskFormValues = z.infer<typeof taskSchema>;

export const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'questions',
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data: TaskFormValues) => {
        try {
            await api.post('/tasks', data, {
                headers: { 'Content-Type': 'application/json' },
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

                {fields.map((field, index) => (
                    <QuestionContainer key={field.id}>
                        <label htmlFor={`questions.${index}.text`}>
                            Questão {index + 1}
                        </label>
                        <input
                            type="text"
                            {...register(`questions.${index}.text`)}
                        />
                        <RemoveButton
                            type="button"
                            onClick={() => remove(index)}
                        >
                            Remover Questão
                        </RemoveButton>
                    </QuestionContainer>
                ))}
                <AddQuestionButton
                    type="button"
                    onClick={() => append({ text: '' })}
                >
                    Adicionar Questão
                </AddQuestionButton>
                <br />

                <SubmitButton type="submit">Criar Tarefa</SubmitButton>
                {submitSuccess && (
                    <SuccessMessage>Tarefa criada com sucesso!</SuccessMessage>
                )}
            </form>
        </CreateTaskContainer>
    );
};
