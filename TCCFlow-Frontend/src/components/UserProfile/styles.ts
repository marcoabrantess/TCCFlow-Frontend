import styled from 'styled-components';

export const UserProfileContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const UserAvatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0 0.375rem 1rem rgba(0, 0, 0, 0.15);
    }
`;

export const InitialsCircle = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0 0.375rem 1rem rgba(0, 0, 0, 0.15);
    }
`;

export const UserMenu = styled.div`
    position: absolute;
    top: 110%;
    right: 0;
    background-color: ${({ theme }) => theme.white};
    border: 0.0625rem solid ${({ theme }) => theme['gray-300']};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    padding: 0.75rem 0;
    width: 15rem;
    z-index: 1000;
`;

export const UserMenuItem = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-900']};
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme['gray-100']};
    }

    &:last-child {
        color: ${({ theme }) => theme['red-500']};
    }
`;

export const IconContainer = styled.span`
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme['gray-600']};
`;
