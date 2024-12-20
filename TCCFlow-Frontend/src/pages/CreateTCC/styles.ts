import styled from 'styled-components';

export const CreateTCCContainer = styled.div`
    padding: 2rem;
    background-color: ${({ theme }) => theme['gray-100']};
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;

    h1 {
        font-size: 1.75rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme['gray-300']};
    border-radius: 4px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['gray-900']};

    &:focus {
        border-color: ${({ theme }) => theme['blue-500']};
        outline: none;
        box-shadow: 0 0 0 3px ${({ theme }) => theme['blue-100']};
    }
`;

export const Button = styled.button`
    padding: 0.8rem;
    background-color: ${({ theme }) => theme['blue-500']};
    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme['blue-700']};
    }
`;
