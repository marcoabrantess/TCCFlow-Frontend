// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Resets and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root variables for colors, spacing, and typography */
  :root {
    --color-background: ${({ theme }) => theme.white};  /* Fundo branco */
    --color-surface: ${({ theme }) => theme['gray-100']};  /* Fundo leve para seções */
    --color-text-primary: ${({ theme }) => theme['gray-900']};  /* Texto principal mais escuro */
    --color-text-secondary: ${({ theme }) => theme['gray-700']};  /* Texto secundário */
    --color-text-link: ${({ theme }) => theme['blue-500']};  /* Links e destaques */
    --color-primary: ${({ theme }) => theme['blue-500']};
    --color-primary-dark: ${({ theme }) => theme['blue-700']};
    --color-success: ${({ theme }) => theme['green-500']};
    --color-error: ${({ theme }) => theme['red-500']};
    --color-warning: ${({ theme }) => theme['yellow-500']};

    --font-family-sans: 'Arial', sans-serif;
    --font-family-heading: 'Roboto', sans-serif;
    --font-size-base: 16px;
    --line-height-base: 1.5;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
  }

  /* Typography and general body settings */
  body {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    background-color: var(--color-background);  /* Fundo branco */
    color: var(--color-text-primary);  /* Texto escuro para contraste */
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Headings with special typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
    color: var(--color-text-primary);  /* Headings com a mesma cor de texto principal */
    margin-bottom: var(--space-md);
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }

  /* Link styling */
  a {
    text-decoration: none;
    color: var(--color-text-link);
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  /* Button styling */
  button {
    font-family: inherit;
    padding: var(--space-sm) var(--space-md);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  button.primary {
    background-color: var(--color-primary);
    color: var(--color-surface);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  button.success {
    background-color: var(--color-success);
    color: var(--color-surface);
  }

  button.error {
    background-color: var(--color-error);
    color: var(--color-surface);
  }

  /* Form elements styling */
  input, textarea, select {
    font-family: inherit;
    padding: var(--space-sm);
    border: 1px solid var(--color-text-secondary);
    border-radius: 4px;
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--color-primary);
      outline: none;
    }
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .mb-sm {
    margin-bottom: var(--space-sm);
  }

  .mb-md {
    margin-bottom: var(--space-md);
  }

  .mb-lg {
    margin-bottom: var(--space-lg);
  }
`;
