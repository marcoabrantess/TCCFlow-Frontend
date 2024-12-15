import styled from 'styled-components';

export const TCCContainer = styled.main`
    padding: 2rem;

    h1 {
        font-size: 1.75rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const TCCListDiv = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TCCItem = styled.li`
    padding: 1rem;
    background-color: ${({ theme }) => theme['white']};
    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['blue-300']};
    }
`;

export const CreateButton = styled.button`
    padding: 0.8rem 1.5rem;
    background-color: ${({ theme }) => theme['blue-500']};
    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme['blue-700']};
    }
`;

export const SearchInput = styled.input`
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme['gray-300']};
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 100%;
    color: ${({ theme }) => theme['gray-900']};
    background-color: ${({ theme }) => theme['white']};

    &:focus {
        border-color: ${({ theme }) => theme['blue-700']};
        outline: none;
        box-shadow: 0 0 0 0.05rem ${({ theme }) => theme['blue-500']};
    }
`;
