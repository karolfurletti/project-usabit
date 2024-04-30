import { z } from 'zod';

export const ClientSchema = z.object({
    type: z.union([z.literal('PF'), z.literal('PJ')]),
    name: z.string().min(1).optional(),
    tradeName: z.string().min(1).optional(),
    companyName: z.string().min(1).optional(),
    cpf: z.string().refine((value: string) => /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(value), {
        message: 'CPF inválido'
    }).optional(),
    cnpj: z.string().refine((value: string) => /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value), {
        message: 'CNPJ inválido'
    }).optional(),
    email: z.string().email({
        message: "Digite um email válido"
    }),
    phone: z.string().refine((value: string) => /^9\d{2}\d{4}\d{4}$/.test(value), {
        message: 'Digite um numero válido'
    })
});


