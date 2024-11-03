import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { Router } from './router/Router';

import { AuthProvider } from './contexts/AuthContext';

import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AuthProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </AuthProvider>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
