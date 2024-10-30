import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #4a90e2;
    color: #fff;
`;

export const NavLink = styled.a`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #357abd;
    }
`;

export const LogoutButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #e94e4e;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d44343;
    }
`;
