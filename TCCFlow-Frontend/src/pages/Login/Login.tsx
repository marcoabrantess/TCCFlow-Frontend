import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
    LoginContainer,
    LoginForm,
    Input,
    Button,
    ErrorMessage,
} from './styles';

export const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const success = await login(email, password);
        setIsLoading(false);

        if (success) {
            navigate('/');
        } else {
            setError('Erro ao realizar login. Verifique suas credenciais.');
        }
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Entrar'}
                </Button>
            </LoginForm>
        </LoginContainer>
    );
};
