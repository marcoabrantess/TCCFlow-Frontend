// src/pages/Home.tsx
import React from 'react';
import { HomeContainer, HomeContent } from './styles.ts';

export const Home: React.FC = () => (
    <>
        <HomeContainer>
            <HomeContent>
                <h2>Bem-vindo ao TCCFlow!</h2>
                <p>
                    Gerencie de forma prática o desenvolvimento do seu TCC com
                    ferramentas integradas e automações.
                </p>
            </HomeContent>
        </HomeContainer>
    </>
);
