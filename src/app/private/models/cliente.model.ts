export interface Cliente{
    id: string,
    nome: string,
    id_endereco?: string,
    rua?: string,
    numero?: number,
    complemento?: string,
    uf?: string,
    id_municipio?: string,
    nome_municipio?: string
}