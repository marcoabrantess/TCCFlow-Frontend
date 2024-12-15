import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import api from '../../services/api';

import {
    EditProfileContainer,
    FormGroup,
    PasswordFieldContainer,
    ErrorText,
    SubmitButton,
    SuccessMessage,
    TogglePasswordButton,
} from './styles';
import { useAuth } from '../../contexts/AuthContext';

const profileSchema = z
    .object({
        name: z
            .string()
            .regex(
                /^[A-Za-zÀ-ÿ\s]+$/,
                'O nome deve conter apenas letras e espaços',
            )
            .optional()
            .or(z.literal('')),
        email: z.string().optional(),
        password: z.string().optional(),
        photo: z.any().optional(),
    })
    .refine(
        (data) =>
            data.name?.trim() ||
            data.email?.trim() ||
            data.password?.trim() ||
            data.photo,
        {
            message: 'Pelo menos um campo deve ser preenchido.',
            path: ['name'],
        },
    );

type ProfileFormData = z.infer<typeof profileSchema>;

export const EditProfile: React.FC = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit = async (data: ProfileFormData) => {
        try {
            setErrorMessage(null);

            const payload: Record<string, any> = {
                name: data.name || undefined,
                email: data.email || undefined,
                password: data.password || undefined,
            };

            const photoInput = (data.photo as unknown as FileList)?.[0];
            if (photoInput) {
                const photoBase64 = await new Promise<
                    string | ArrayBuffer | null
                >((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(reader.error);
                    reader.readAsDataURL(photoInput);
                });
                payload.photo = photoBase64;
            }

            const userId = user.id;

            const response = await api.post(`/users/${userId}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Resposta do backend:', response.data);
            setSubmitSuccess(true);
        } catch (err: any) {
            console.error('Erro ao atualizar perfil:', err);
            setErrorMessage(
                err.response?.data?.message || 'Erro ao atualizar perfil.',
            );
        }
    };

    return (
        <EditProfileContainer>
            <h2>Alterar Informações</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" id="name" {...register('name')} />
                    {errors.name && (
                        <ErrorText>{errors.name.message}</ErrorText>
                    )}
                </FormGroup>

                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} />
                    {errors.email && (
                        <ErrorText>{errors.email.message}</ErrorText>
                    )}
                </FormGroup>

                <FormGroup>
                    <label htmlFor="password">Senha</label>
                    <PasswordFieldContainer>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            {...register('password')}
                        />
                        <TogglePasswordButton
                            onClick={togglePasswordVisibility}
                            type="button"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </TogglePasswordButton>
                    </PasswordFieldContainer>
                    {errors.password && (
                        <ErrorText>{errors.password.message}</ErrorText>
                    )}
                </FormGroup>

                <FormGroup>
                    <label htmlFor="photo">Foto</label>
                    <input type="file" id="photo" {...register('photo')} />
                    {errors.photo && (
                        <ErrorText>{errors.photo.message}</ErrorText>
                    )}
                </FormGroup>

                <SubmitButton type="submit">Salvar Alterações</SubmitButton>
                {submitSuccess && (
                    <SuccessMessage>
                        Informações atualizadas com sucesso!
                    </SuccessMessage>
                )}
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </form>
        </EditProfileContainer>
    );
};
