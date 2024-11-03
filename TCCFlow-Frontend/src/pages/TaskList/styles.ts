// src/pages/styles.ts
import styled from 'styled-components';

export const TaskContainer = styled.main`
    padding: 2rem;
`;

export const AddTaskButton = styled.button`
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['blue-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme['blue-700']};
    }
`;

export const TaskList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TaskItem = styled.li<{ completed: boolean }>`
    padding: 1rem;
    background-color: ${({ completed, theme }) =>
        completed ? theme['gray-300'] : theme['blue-100']};
    color: ${({ completed, theme }) =>
        completed ? theme['gray-500'] : theme['gray-900']};
    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ completed, theme }) =>
            completed ? theme['gray-400'] : theme['blue-300']};
    }
`;
