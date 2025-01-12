import styled from 'styled-components';

export const TaskDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme['gray-50']};
`;

export const TaskTitle = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme['blue-700']};
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-700']};
    margin-bottom: 2rem;
    text-align: center;
    max-width: 800px;
    line-height: 1.6;
`;

export const TaskInfo = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-600']};
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 600;
`;

export const GradesContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const StudentGradeCard = styled.div`
    background-color: ${({ theme }) => theme.white};
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
        color: ${({ theme }) => theme['gray-800']};
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    span {
        font-size: 1.1rem;
        color: ${({ theme }) => theme['gray-600']};
    }
`;

export const GradeInput = styled.input`
    width: 120px;
    padding: 0.8rem;
    border: 2px solid ${({ theme }) => theme['gray-300']};
    border-radius: 8px;
    font-size: 1.1rem;

    &:focus {
        border-color: ${({ theme }) => theme['blue-500']};
        outline: none;
    }
`;

export const TaskActionButton = styled.button`
    margin-top: 2rem;
    padding: 1.2rem 2.4rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    align-self: center;

    &:hover {
        background-color: ${({ theme }) => theme['green-600']};
    }
`;

export const RoleInfo = styled.p`
    margin-top: 2rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-500']};
    text-align: center;
`;
