import styled from 'styled-components';

export const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100vh;
    background-color: ${({ theme }) => theme['gray-100']};

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['gray-900']};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    h2 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
        text-align: center;
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
`;

export const Input = styled.input`
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;
    color: ${({ theme }) => theme['gray-900']};
    background-color: ${({ theme }) => theme['gray-100']};
    transition: border-color 0.2s ease;

    &:focus {
        background-color: ${({ theme }) => theme.white};
        border-color: ${({ theme }) => theme['blue-500']};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        outline: none;
    }
`;

export const Button = styled.button`
    padding: 0.8rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['blue-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme['blue-700']};
    }
`;

export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme['red-500']};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    text-align: center;
`;
