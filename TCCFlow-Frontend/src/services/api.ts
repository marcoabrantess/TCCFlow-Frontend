export const api = {
    async request(endpoint: string, options: RequestInit = {}) {
        const token = localStorage.getItem('authToken');
        const headers = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        };

        const baseUrl = import.meta.env.VITE_BACKEND_URL;
        if (!baseUrl) {
            throw new Error('VITE_BACKEND_URL is not defined in .env');
        }

        const response = await fetch(`${baseUrl}${endpoint}`, {
            ...options,
            headers: {
                ...headers,
                ...options.headers,
            },
        });

        if (!response.ok) {
            const error = await response.json();
            const errorMessage = error.message || 'Something went wrong';
            throw new Error(errorMessage);
        }
        return response.json();
    },

    async get(endpoint: string, options: RequestInit = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    },

    async post(endpoint: string, body?: any, options: RequestInit = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    async put(endpoint: string, body?: any, options: RequestInit = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        });
    },

    async delete(endpoint: string, options: RequestInit = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    },
};

export default api;
