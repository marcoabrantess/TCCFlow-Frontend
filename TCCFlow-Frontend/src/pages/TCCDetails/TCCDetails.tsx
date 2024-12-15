import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { TCCDetailsContainer, TCCDownloadButton } from './styles';

interface TCC {
    id: number;
    title: string;
    authorName: string;
    advisorName: string;
    coadvisorName: string;
    contentPath: string;
}

export const TCCDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [tcc, setTCC] = useState<TCC | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTCCDetails = async () => {
        try {
            const response = await api.get(`/tcc/${id}`);
            setTCC(response.data);
        } catch (err) {
            console.error('Failed to fetch TCC details:', err);
            setError('Erro ao carregar os detalhes do TCC. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTCCDetails();
        }
    }, [id]);

    if (loading) {
        return <p>Carregando detalhes do TCC...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!tcc) {
        return <p>Nenhum TCC encontrado.</p>;
    }

    const baseUrl = import.meta.env.VITE_BACKEND_URL;
    if (!baseUrl) {
        throw new Error('VITE_BACKEND_URL is not defined in .env');
    }

    const downloadURL = `${baseUrl}${tcc.contentPath}`;

    return (
        <TCCDetailsContainer>
            <h1>{tcc.title}</h1>
            <p>Autor: {tcc.authorName}</p>
            <p>Orientador: {tcc.advisorName}</p>
            {tcc.coadvisorName && <p>CO-Orientador: {tcc.coadvisorName}</p>}
            <TCCDownloadButton href={downloadURL} target="_blank">
                Arquivo da Monografia
            </TCCDownloadButton>
        </TCCDetailsContainer>
    );
};
