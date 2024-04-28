import { z } from 'zod';

export const ClientSchema = z.object({
    type: z.union([z.literal('PF'), z.literal('PJ')]),
    name: z.string().min(1),
    tradeName: z.string().min(1).optional(),
    companyName: z.string().min(1).optional(),
    cpf: z.string().refine((value: string) => /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(value), {
        message: 'Invalid CPF'
    }).optional(),
    cnpj: z.string().refine((value: string) => /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value), {
        message: 'Invalid CNPJ'
    }).optional(),
    email: z.string().email(),
    phone: z.string().refine((value: string) => /^9\d{2}\d{4}\d{4}$/.test(value), {
        message: 'Invalid phone number'
    })
});


