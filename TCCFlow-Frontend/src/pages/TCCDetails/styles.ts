import styled from 'styled-components';

export const TCCDetailsContainer = styled.div`
    padding: 2rem;
    h1 {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme['blue-500']};
    }

    p {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme['gray-800']};
    }
`;

export const TCCDownloadButton = styled.a`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['blue-300']};
    border: none;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
`;
