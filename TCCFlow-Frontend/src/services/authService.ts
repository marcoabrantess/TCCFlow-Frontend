import { api } from './api';

interface LoginResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        photoUrl?: string;
    };
    roles: string[];
}

export const authService = {
    async login(email: string, password: string): Promise<LoginResponse> {
        return await api.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    },

    async logout(): Promise<void> {
        localStorage.removeItem('authToken');
    },
};
