import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme['blue-500']};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
`;

export const LogoLink = styled(Link)`
    font-size: 1.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    transition: color 0.2s;
    margin-right: auto;

    &:hover {
        color: ${({ theme }) => theme['blue-300']};
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const NavButton = styled(Link)`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['blue-700']};
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
        background-color 0.2s,
        transform 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['blue-300']};
    }

    &:active {
        transform: translateY(0);
    }
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 1rem;
`;
