import React from 'react';

import { HomeContainer, HomeContent } from './styles.ts';

export const Home: React.FC = () => (
    <>
        <HomeContainer>
            <HomeContent>
                <h1>Bem-vindo ao TCCFlow!</h1>

                <p>
                    Gerencie de forma prática o desenvolvimento do seu TCC com
                    ferramentas integradas e automações.
                </p>
            </HomeContent>
        </HomeContainer>
    </>
);
