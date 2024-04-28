export interface Client {
    id: string,
    type: 'PF' | 'PJ';
    name: string;
    tradeName?: string;
    companyName?: string;
    cpf?: string;
    cnpj?: string;
    email: string;
    phone: string;
}
