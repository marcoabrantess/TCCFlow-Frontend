import styled from 'styled-components';

export const UsersContainer = styled.div`
    padding: 2rem;
    background-color: ${({ theme }) => theme['white']};
    border-radius: 8px;

    h1 {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme['blue-500']};
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;

export const UserItem = styled.li`
    background-color: ${({ theme }) => theme.white};
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid ${({ theme }) => theme['gray-300']};
    border-radius: 4px;

    p {
        margin: 0;
        color: ${({ theme }) => theme['gray-900']};
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
    box-sizing: border-box;

    &:focus {
        border-color: ${({ theme }) => theme['blue-700']};
        outline: none;
        box-shadow: 0 0 0 0.05rem ${({ theme }) => theme['blue-500']};
    }
`;
