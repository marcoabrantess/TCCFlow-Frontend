import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { TCCContainer, TCCListDiv, TCCItem, CreateButton } from './styles';

interface TCC {
    _id: number;
    title: string;
    authorName: string;
}

export const TCCList: React.FC = () => {
    const navigate = useNavigate();
    const [tccs, setTCCs] = useState<TCC[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTCCs = async () => {
        try {
            const response = await api.get('/tcc');
            setTCCs(response?.data);
        } catch (err) {
            console.error('Failed to fetch TCCs:', err);
            setError('Erro ao carregar os TCCs. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTCCs();
    }, []);

    const handleTCCClick = (id: number) => {
        navigate(`/tcc/${id}`);
    };

    const handleCreateClick = () => {
        navigate('/tcc/create');
    };

    if (loading) {
        return <p>Carregando TCCs...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <TCCContainer>
            <h1>Repositório de TCCs</h1>
            <CreateButton onClick={handleCreateClick}>
                Criar Novo TCC
            </CreateButton>
            <TCCListDiv>
                {tccs.map((tcc) => (
                    <TCCItem
                        key={tcc._id}
                        onClick={() => handleTCCClick(tcc._id)}
                    >
                        {tcc.title} - {tcc.authorName}
                    </TCCItem>
                ))}
            </TCCListDiv>
        </TCCContainer>
    );
};
