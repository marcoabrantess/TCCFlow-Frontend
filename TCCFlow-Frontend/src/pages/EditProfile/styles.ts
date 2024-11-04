// src/pages/styles.ts
import styled from 'styled-components';

export const EditProfileContainer = styled.div`
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 1.75rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme['gray-900']};
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid ${({ theme }) => theme['gray-300']};
        border-radius: 4px;
        background-color: ${({ theme }) => theme['gray-100']};
        color: ${({ theme }) => theme['gray-900']};
        transition: all 0.3s ease;

        &:hover {
            border-color: ${({ theme }) => theme['blue-300']};
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        &:focus {
            background-color: ${({ theme }) => theme.white};
            border-color: ${({ theme }) => theme['blue-500']};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            outline: none;
        }
    }
`;

export const PasswordFieldContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        padding: 0.5rem 2.5rem 0.5rem 0.5rem;
        font-size: 1rem;
        border: 1px solid ${({ theme }) => theme['gray-300']};
        border-radius: 8px;
        background-color: ${({ theme }) => theme['gray-100']};
        color: ${({ theme }) => theme['gray-900']};
        transition: all 0.3s ease;

        &:hover {
            border-color: ${({ theme }) => theme['blue-300']};
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        &:focus {
            background-color: ${({ theme }) => theme.white};
            border-color: ${({ theme }) => theme['blue-500']};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            outline: none;
        }
    }
`;

export const TogglePasswordButton = styled.button`
    position: absolute;
    right: 0.8rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme['gray-600']};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;

    &:hover {
        color: ${({ theme }) => theme['blue-500']};
    }
`;

export const ErrorText = styled.span`
    color: ${({ theme }) => theme['red-500']};
    font-size: 0.875rem;
    margin-top: 0.25rem;
`;

export const SubmitButton = styled.button`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['green-700']};
    }
`;

export const SuccessMessage = styled.p`
    margin-top: 1rem;
    color: ${({ theme }) => theme['green-500']};
    font-weight: bold;
    text-align: center;
`;
