import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TCCContainer, TCCListDiv, TCCItem } from './styles';

export const TCCList: React.FC = () => {
    const navigate = useNavigate();

    const tccs = [
        { id: 1, title: 'TCC 1', author: 'Autor 1' },
        { id: 2, title: 'TCC 2', author: 'Autor 2' },
        // Exemplo de TCCs
    ];

    const handleTCCClick = (id: number) => {
        navigate(`/tccs/${id}`);
    };

    return (
        <TCCContainer>
            <h1>Repositório de TCCs</h1>
            <TCCListDiv>
                {tccs.map((tcc) => (
                    <TCCItem
                        key={tcc.id}
                        onClick={() => handleTCCClick(tcc.id)}
                    >
                        {tcc.title} - {tcc.author}
                    </TCCItem>
                ))}
            </TCCListDiv>
        </TCCContainer>
    );
};
