// src/pages/styles.ts
import styled from 'styled-components';

export const TCCContainer = styled.main`
    padding: 2rem;
`;

export const TCCListDiv = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TCCItem = styled.li`
    padding: 1rem;
    background-color: ${({ theme }) => theme['gray-100']};
    color: ${({ theme }) => theme['gray-900']};
    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['gray-300']};
    }
`;
