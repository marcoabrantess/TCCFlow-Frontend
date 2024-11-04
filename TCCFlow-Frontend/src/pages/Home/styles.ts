import styled from 'styled-components';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    text-align: center;
    background-color: ${({ theme }) => theme['gray-100']};
    min-height: 100vh;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const HomeContent = styled.section`
    max-width: 600px;
    width: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['gray-900']};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.2s ease;

    h1 {
        font-size: 1.75rem;
        color: ${({ theme }) => theme['blue-500']};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme['gray-700']};
        line-height: 1.6;
    }
`;
