import styled from 'styled-components';

export const TaskDetailsContainer = styled.div`
    padding: 2rem;
`;

export const TaskActionButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme['green-700']};
    }
`;
