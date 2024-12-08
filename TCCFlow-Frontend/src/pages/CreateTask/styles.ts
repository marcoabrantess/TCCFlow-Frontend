import styled from 'styled-components';

export const CreateTaskContainer = styled.div`
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 1.75rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
        text-align: center;
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

    input,
    textarea {
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

    textarea {
        resize: vertical;
        min-height: 100px;
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
