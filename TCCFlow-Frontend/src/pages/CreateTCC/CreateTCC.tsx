import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import api from '../../services/api';
import { CreateTCCContainer, Form, Input, Button } from './styles';

// Esquema de validação com Zod
const tccSchema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    authorName: z.string().min(1, 'Nome do autor é obrigatório'),
    advisorName: z.string().min(1, 'Nome do orientador é obrigatório'),
    coadvisorName: z.string().optional(),
    file: z
        .instanceof(File)
        .or(z.null())
        .refine((file) => file !== null, {
            message: 'Arquivo é obrigatório',
        }),
});

type TCCFormValues = z.infer<typeof tccSchema>;

export const CreateTCC: React.FC = () => {
    const [formValues, setFormValues] = useState<TCCFormValues>({
        title: '',
        authorName: '',
        advisorName: '',
        coadvisorName: '',
        file: null,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFormValues((prev) => ({ ...prev, file: selectedFile }));
    };

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            tccSchema.parse(formValues);

            let fileBase64 = null;
            if (formValues.file) {
                fileBase64 = await fileToBase64(formValues.file);
            }

            const payload = {
                title: formValues.title,
                authorName: formValues.authorName,
                advisorName: formValues.advisorName,
                coadvisorName: formValues.coadvisorName,
                file: fileBase64,
            };

            await api.post('/tcc', payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            navigate('/');
        } catch (err) {
            if (err instanceof z.ZodError) {
                const validationErrors: Record<string, string> = {};
                err.errors.forEach((error) => {
                    if (error.path[0]) {
                        validationErrors[error.path[0] as string] =
                            error.message;
                    }
                });
                setErrors(validationErrors);
            } else {
                console.error('Erro ao criar TCC:', err);
                setError('Erro ao criar o TCC. Tente novamente.');
            }
        }
    };

    return (
        <CreateTCCContainer>
            <h1>Criar Novo TCC</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="title"
                    placeholder="Título do TCC"
                    value={formValues.title}
                    onChange={handleChange}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                <Input
                    type="text"
                    name="authorName"
                    placeholder="Nome do Autor"
                    value={formValues.authorName}
                    onChange={handleChange}
                />
                {errors.authorName && (
                    <p style={{ color: 'red' }}>{errors.authorName}</p>
                )}

                <Input
                    type="text"
                    name="advisorName"
                    placeholder="Orientador"
                    value={formValues.advisorName}
                    onChange={handleChange}
                />
                {errors.advisorName && (
                    <p style={{ color: 'red' }}>{errors.advisorName}</p>
                )}

                <Input
                    type="text"
                    name="coadvisorName"
                    placeholder="Coorientador (opcional)"
                    value={formValues.coadvisorName || ''}
                    onChange={handleChange}
                />

                <Input type="file" accept=".pdf" onChange={handleFileChange} />
                {errors.file && <p style={{ color: 'red' }}>{errors.file}</p>}

                <Button type="submit">Criar TCC</Button>
            </Form>
        </CreateTCCContainer>
    );
};
