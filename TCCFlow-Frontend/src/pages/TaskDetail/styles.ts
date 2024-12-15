import styled from 'styled-components';

export const TaskDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme['gray-50']};
    box-shadow: inset 0 0 10px ${({ theme }) => theme['gray-200']};
`;

export const TaskTitle = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme['blue-700']};
    margin-bottom: 2.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const TaskInfo = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-500']};
    margin-bottom: 3rem;
    text-align: center;
    line-height: 1.6;
`;

export const QuestionsContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
`;

export const QuestionCard = styled.div`
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme['gray-200']};
    border-radius: 15px;
    padding: 2.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const QuestionText = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-800']};
    margin-bottom: 2rem;
    font-weight: 500;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 140px;
    padding: 1.2rem;
    border: 1px solid ${({ theme }) => theme['gray-300']};
    border-radius: 10px;
    font-size: 1.1rem;
    font-family: inherit;
    resize: vertical;
    background-color: ${({ theme }) => theme['gray-100']};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme['blue-600']};
        box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-200']};
    }
`;

export const TaskActionButton = styled.button`
    margin-top: 4rem;
    padding: 1.2rem 2.4rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme['green-600']};
        transform: translateY(-3px);
    }
`;

export const RoleInfo = styled.p`
    margin-top: 3rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-500']};
    text-align: center;
`;
