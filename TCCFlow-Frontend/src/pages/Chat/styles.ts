import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${({ theme }) => theme.white};
    font-family: 'Roboto', sans-serif;
`;

export const MessagesContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
    background: ${({ theme }) => theme['gray-50']};
`;

export const MessageLine = styled.div`
    margin-bottom: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
    white-space: pre-wrap;
`;

export const UserMessage = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme['gray-900']};
    font-family: 'Roboto Mono', monospace;
`;

export const AssistantMessage = styled.div`
    font-size: 1rem;
    background: ${({ theme }) => theme['gray-100']};
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme['gray-900']};
    font-family: 'Roboto Mono', monospace;
`;

export const InputContainer = styled.div`
    position: sticky;
    bottom: 0;
    display: flex;
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme['gray-300']};
    background: ${({ theme }) => theme.white};
`;

export const InputField = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme['gray-300']};
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme['blue-300']};
    }
`;

export const SendButton = styled.button`
    background: ${({ theme }) => theme['blue-500']};
    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 0.5rem;
    padding: 0 1.5rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme['blue-600']};
    }
`;
