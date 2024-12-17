import React, { useState } from 'react';
import {
    ChatContainer,
    MessagesContainer,
    MessageLine,
    InputContainer,
    SendButton,
    InputField,
    AssistantMessage,
    UserMessage,
} from './styles';
import api from '../../services/api';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = { message: inputValue };

        setMessages((prev) => [...prev, { role: 'user', content: inputValue }]);
        setInputValue('');

        try {
            const response = await api.post(
                '/generateText',
                { content: userMessage },
                {
                    headers: { 'Content-Type': 'application/json' },
                },
            );

            const assistantReply =
                response.responseText || 'Sem resposta disponível';
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: assistantReply },
            ]);
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'Ocorreu um erro, tente novamente.',
                },
            ]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <ChatContainer>
            <MessagesContainer>
                {messages.map((msg, index) => (
                    <MessageLine key={index}>
                        {msg.role === 'assistant' ? (
                            <AssistantMessage>{msg.content}</AssistantMessage>
                        ) : (
                            <UserMessage>{msg.content}</UserMessage>
                        )}
                    </MessageLine>
                ))}
            </MessagesContainer>
            <InputContainer>
                <InputField
                    placeholder="Digite sua mensagem..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <SendButton onClick={handleSendMessage}>Enviar</SendButton>
            </InputContainer>
        </ChatContainer>
    );
};
