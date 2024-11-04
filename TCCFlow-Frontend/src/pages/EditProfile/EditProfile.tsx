// src/pages/EditProfile.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import {
    EditProfileContainer,
    FormGroup,
    PasswordFieldContainer,
    ErrorText,
    SubmitButton,
    SuccessMessage,
    TogglePasswordButton,
} from './styles';

const profileSchema = z.object({
    fullName: z
        .string()
        .regex(
            /^[A-Za-zÀ-ÿ\s]+$/,
            'O nome deve conter apenas letras e espaços',
        ),
    email: z.string().email('Insira um endereço de email válido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    photo: z.instanceof(File).optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const EditProfile: React.FC = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit = (data: ProfileFormData) => {
        console.log('Dados do formulário:', data);
        setSubmitSuccess(true);
    };

    return (
        <EditProfileContainer>
            <h2>Alterar Informações</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input
                        type="text"
                        id="fullName"
                        {...register('fullName')}
                    />
                    {errors.fullName && (
                        <ErrorText>{errors.fullName.message}</ErrorText>
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
            </form>
        </EditProfileContainer>
    );
};
