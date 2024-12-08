import React from 'react';
import { useParams } from 'react-router-dom';

import { TCCDetailsContainer, TCCDownloadButton } from './styles';

export const TCCDetails: React.FC = () => {
    const { id } = useParams();

    const tcc = {
        title: `TCC ${id}`,
        author: 'Autor Exemplo',
        advisor: 'Orientador Exemplo',
        thesisFile: 'monografia.pdf',
    };

    return (
        <TCCDetailsContainer>
            <h1>{tcc.title}</h1>
            <p>Autor: {tcc.author}</p>
            <p>Orientador: {tcc.advisor}</p>
            <TCCDownloadButton href={tcc.thesisFile} target="_blank">
                Baixar Monografia
            </TCCDownloadButton>
        </TCCDetailsContainer>
    );
};
