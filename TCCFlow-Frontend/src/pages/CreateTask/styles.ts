import styled from 'styled-components';

export const CreateTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 3rem auto;
    padding: 2.5rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme['blue-600']};
        margin-bottom: 2rem;
        text-align: center;
    }
    flex-grow: 1;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme['gray-900']};
    }
    input,
    textarea {
        padding: 0.8rem;
        font-size: 1rem;
        border: 2px solid ${({ theme }) => theme['gray-300']};
        border-radius: 6px;
        background-color: ${({ theme }) => theme['gray-50']};
        color: ${({ theme }) => theme['gray-900']};
        transition: all 0.3s ease;
        &:hover {
            border-color: ${({ theme }) => theme['blue-300']};
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }
        &:focus {
            background-color: ${({ theme }) => theme.white};
            border-color: ${({ theme }) => theme['blue-500']};
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            outline: none;
        }
    }
    textarea {
        resize: vertical;
        min-height: 120px;
    }
`;

export const ErrorText = styled.span`
    color: ${({ theme }) => theme['red-600']};
    font-size: 0.9rem;
    margin-top: 0.5rem;
`;

export const SubmitButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.25s;
    &:hover {
        background-color: ${({ theme }) => theme['green-700']};
    }
    margin-top: 1.5rem; /* Added to ensure spacing from the last question or button */
`;

export const SuccessMessage = styled.p`
    margin-top: 1.5rem;
    color: ${({ theme }) => theme['green-600']};
    font-weight: bold;
    text-align: center;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: flex-start;
    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    input {
        width: 100%;
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        border: 1px solid ${({ theme }) => theme['gray-300']};
        border-radius: 4px;
        background-color: ${({ theme }) => theme['gray-50']};
        transition: all 0.3s ease;
        &:hover {
            border-color: ${({ theme }) => theme['blue-300']};
        }
        &:focus {
            border-color: ${({ theme }) => theme['blue-500']};
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            outline: none;
        }
    }
`;

export const RemoveButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['red-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme['red-700']};
    }
`;

export const AddQuestionButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['blue-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.25s;
    &:hover {
        background-color: ${({ theme }) => theme['blue-700']};
    }

    margin-top: 1rem;
`;
